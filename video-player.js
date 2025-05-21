/**
 * Enhanced Video Player Module
 * Supports multiple video formats including MP4, TS, MKV, AVI, WebM, and more
 */

class VideoPlayer {
  constructor(options = {}) {
    this.options = {
      container: null,
      videoElement: null,
      autoplay: false,
      muted: false,
      controls: true,
      ...options
    };

    // Map of extensions to MIME types
    this.mimeTypes = {
      'mp4': 'video/mp4',
      'webm': 'video/webm',
      'ts': 'video/mp2t',
      'ogg': 'video/ogg',
      'ogv': 'video/ogg',
      'mov': 'video/quicktime',
      'mkv': 'video/x-matroska',
      'avi': 'video/x-msvideo',
      'm4v': 'video/x-m4v',
      'flv': 'video/x-flv',
      '3gp': 'video/3gpp',
      'wmv': 'video/x-ms-wmv',
      'mpg': 'video/mpeg',
      'mpeg': 'video/mpeg',
      'mts': 'video/mp2t',
      'm2ts': 'video/mp2t'
    };

    // For .ts files, we'll also try alternative MIME types that some browsers might recognize
    this.tsMimeTypes = [
      'video/mp2t',
      'video/mp4',
      'video/mpeg',
      'application/x-mpegURL',
      'application/vnd.apple.mpegURL',
      'video/x-mpegURL',
      'audio/mpegurl',
      'audio/x-mpegurl',
      'application/mpegurl',
      'application/x-mpegurl',
      'video/m2ts',
      'video/x-m2ts',
      'video/ts',
      'video/x-ts'
    ];

    // Initialize the player
    this.init();
  }

  /**
   * Initialize the video player
   */
  init() {
    // Get or create video element
    this.videoElement = this.options.videoElement ||
                        (this.options.container ? this.options.container.querySelector('video') : null);

    if (!this.videoElement && this.options.container) {
      this.videoElement = document.createElement('video');
      this.videoElement.controls = this.options.controls;
      this.videoElement.autoplay = this.options.autoplay;
      this.videoElement.muted = this.options.muted;
      this.options.container.appendChild(this.videoElement);
    }

    if (!this.videoElement) {
      console.error('VideoPlayer: No video element or container provided');
      return;
    }

    // Add event listeners
    this.addEventListeners();
  }

  /**
   * Add event listeners to the video element
   */
  addEventListeners() {
    this.videoElement.addEventListener('error', this.handleError.bind(this));
    this.videoElement.addEventListener('loadedmetadata', this.handleLoadedMetadata.bind(this));
  }

  /**
   * Load and play a video
   * @param {string} src - The video source URL
   * @param {string} title - The video title
   * @param {Function} onError - Error callback
   */
  loadVideo(src, title = '', onError = null) {
    if (!src) {
      console.error('VideoPlayer: No source provided');
      if (onError) onError('No video source provided', '');
      return;
    }

    console.log(`Loading video: ${src}`);

    // Store the source and title
    this.currentSrc = src;
    this.currentTitle = title;
    this.onErrorCallback = onError;

    // Get file extension
    const ext = this.getFileExtension(src);
    console.log(`Video file extension: ${ext}`);

    // Clear any existing sources
    this.clearSources();

    // Try loading with direct path first
    try {
      // Handle TS files with HLS.js if available
      if (ext === 'ts' && window.Hls && Hls.isSupported()) {
        this.loadWithHLS(src);
      } else {
        // For other formats, use standard HTML5 video
        this.loadWithHTML5(src, ext);
      }
    } catch (error) {
      console.error('Error loading video:', error);

      // Try with encoded path if direct path fails
      if (!src.includes('?retry=')) {
        console.log('Retrying with encoded path');

        // First try with encodeURIComponent for the filename
        const lastSlashIndex = src.lastIndexOf('/');
        const directory = src.substring(0, lastSlashIndex + 1);
        const filename = src.substring(lastSlashIndex + 1);
        const encodedPath = directory + encodeURIComponent(filename) + '?retry=1';

        this.loadVideo(encodedPath, title, onError);
      } else if (src.includes('?retry=1')) {
        // If first retry failed, try with full URI encoding
        console.log('Retrying with full URI encoding');
        const baseSrc = src.split('?')[0];
        const encodedPath = encodeURI(baseSrc) + '?retry=2';

        this.loadVideo(encodedPath, title, onError);
      } else {
        // If all retries fail, call the error callback
        if (onError) {
          onError(`Failed to load video after multiple attempts: ${error.message}`, ext);
        }
      }
    }
  }

  /**
   * Load video using HLS.js
   * @param {string} src - The video source URL
   */
  loadWithHLS(src) {
    console.log('Using HLS.js for .ts playback');

    // If there was a previous HLS instance, destroy it
    if (this.hlsInstance) {
      this.hlsInstance.destroy();
      this.hlsInstance = null;
    }

    // Check if HLS.js is actually available
    if (typeof Hls === 'undefined') {
      console.error('HLS.js is not loaded. Falling back to HTML5 video.');
      this.loadWithHTML5(src, 'ts');
      return;
    }

    // Check if HLS.js is supported in this browser
    if (!Hls.isSupported()) {
      console.warn('HLS.js is not supported in this browser. Falling back to MSE or HTML5 video.');
      // Try MSE first, then HTML5
      if (this.isMSESupported()) {
        this.loadWithMSE(src);
      } else {
        this.loadWithHTML5(src, 'ts');
      }
      return;
    }

    // Create a new HLS instance with enhanced robust settings
    const hls = new Hls({
      debug: false,
      enableWorker: true,
      lowLatencyMode: true,
      fragLoadingMaxRetry: 15,
      manifestLoadingMaxRetry: 15,
      levelLoadingMaxRetry: 15,
      fragLoadingMaxRetryTimeout: 15000,
      manifestLoadingMaxRetryTimeout: 15000,
      levelLoadingMaxRetryTimeout: 15000,
      startLevel: -1, // Auto-select quality level
      abrEwmaDefaultEstimate: 500000, // 500kbps default bandwidth estimate
      abrBandWidthFactor: 0.95,
      abrBandWidthUpFactor: 0.7,
      progressive: true, // Enable progressive loading
      maxBufferLength: 60, // Increase buffer length for smoother playback
      maxMaxBufferLength: 120, // Maximum buffer length
      maxBufferSize: 60 * 1000 * 1000, // 60MB buffer size
      maxBufferHole: 0.5, // Maximum buffer hole
      backBufferLength: 30, // 30 seconds of backward buffer
      appendErrorMaxRetry: 5, // Maximum number of append retries
      testBandwidth: true, // Test bandwidth before loading
      xhrSetup: function(xhr) {
        // Add cache busting to prevent caching issues
        xhr.open(xhr.method, xhr.url + '?_cb=' + new Date().getTime(), true);
        // Set longer timeout
        xhr.timeout = 30000; // 30 seconds
      }
    });

    try {
      // Add more event listeners for better debugging and monitoring
      this.addHLSEventListeners(hls);

      // Bind HLS to the video element
      hls.loadSource(src);
      hls.attachMedia(this.videoElement);

      // Store HLS instance for cleanup
      this.hlsInstance = hls;

      // Add event listeners for HLS
      hls.on(hls.constructor.Events.MANIFEST_PARSED, () => {
        console.log('HLS manifest parsed, ready to play');

        // Log available quality levels
        const levels = hls.levels;
        if (levels && levels.length > 0) {
          console.log(`Available quality levels: ${levels.length}`);
          levels.forEach((level, index) => {
            console.log(`Level ${index}: ${level.width}x${level.height} @ ${level.bitrate/1000}kbps`);
          });
        }

        if (this.options.autoplay) {
          this.videoElement.play()
            .then(() => console.log('Autoplay started successfully'))
            .catch(e => {
              console.error('Error auto-playing video:', e);
              // Show autoplay blocked message if needed
              if (e.name === 'NotAllowedError') {
                console.warn('Autoplay blocked by browser. User interaction required.');
                this.showAutoplayBlockedMessage();
              }
            });
        }
      });

      // More comprehensive error handling
      hls.on(hls.constructor.Events.ERROR, (event, data) => {
        console.warn('HLS error:', data);

        // Track error count for this session
        this.hlsErrorCount = (this.hlsErrorCount || 0) + 1;

        // If too many errors, try alternative approach
        if (this.hlsErrorCount > 5) {
          console.error('Too many HLS errors, trying alternative playback method');
          this.hlsInstance.destroy();
          this.hlsInstance = null;

          // Try MSE first, then HTML5
          if (this.isMSESupported()) {
            this.loadWithMSE(src);
          } else {
            this.loadWithHTML5(src, 'ts');
          }
          return;
        }

        if (data.fatal) {
          switch(data.type) {
            case hls.constructor.ErrorTypes.NETWORK_ERROR:
              console.error('Fatal network error', data);
              // Try to recover network error
              hls.startLoad();
              break;

            case hls.constructor.ErrorTypes.MEDIA_ERROR:
              console.error('Fatal media error', data);
              // Try to recover media error with more advanced recovery
              this.recoverHlsMediaError(hls);
              break;

            default:
              // Cannot recover from other fatal errors
              console.error('Fatal unrecoverable HLS error:', data);
              this.handleError({
                target: this.videoElement,
                type: 'error',
                details: data,
                message: 'HLS playback error: ' + (data.details || 'unknown error')
              });

              // Fall back to MSE or direct HTML5 video as a last resort
              this.hlsInstance.destroy();
              this.hlsInstance = null;

              // Try MSE first, then HTML5
              if (this.isMSESupported()) {
                this.loadWithMSE(src);
              } else {
                this.loadWithHTML5(src, 'ts');
              }
              break;
          }
        }
      });
    } catch (e) {
      console.error('Error initializing HLS.js:', e);
      // Fall back to MSE or HTML5 video if HLS initialization fails
      if (this.isMSESupported()) {
        this.loadWithMSE(src);
      } else {
        this.loadWithHTML5(src, 'ts');
      }
    }
  }

  /**
   * Add HLS event listeners for better debugging and monitoring
   * @param {Hls} hls - The HLS instance
   */
  addHLSEventListeners(hls) {
    // Only add these in debug mode to avoid console spam
    const debugEvents = false;

    if (debugEvents) {
      hls.on(hls.constructor.Events.MEDIA_ATTACHED, () => {
        console.log('HLS: Media attached');
      });

      hls.on(hls.constructor.Events.MEDIA_DETACHED, () => {
        console.log('HLS: Media detached');
      });

      hls.on(hls.constructor.Events.MANIFEST_LOADING, () => {
        console.log('HLS: Manifest loading');
      });

      hls.on(hls.constructor.Events.LEVEL_LOADED, (event, data) => {
        console.log(`HLS: Level ${data.level} loaded, duration: ${data.details.totalduration}s`);
      });

      hls.on(hls.constructor.Events.FRAG_LOADED, (event, data) => {
        console.log(`HLS: Fragment loaded, level: ${data.frag.level}, duration: ${data.frag.duration}s`);
      });
    }

    // Always add these important events
    hls.on(hls.constructor.Events.LEVEL_SWITCHING, (event, data) => {
      console.log(`HLS: Switching to level ${data.level}`);
    });

    hls.on(hls.constructor.Events.AUDIO_TRACK_SWITCHING, (event, data) => {
      console.log(`HLS: Switching to audio track ${data.id}`);
    });
  }

  /**
   * Advanced recovery for HLS media errors
   * @param {Hls} hls - The HLS instance
   */
  recoverHlsMediaError(hls) {
    // Track recovery attempts
    this.hlsRecoveryAttempts = (this.hlsRecoveryAttempts || 0) + 1;

    if (this.hlsRecoveryAttempts > 3) {
      // If we've tried recovering too many times, try a more drastic approach
      console.warn('Multiple HLS recovery attempts failed, trying more aggressive recovery');

      // Destroy and recreate HLS instance
      const currentTime = this.videoElement.currentTime;
      const src = this.currentSrc;

      hls.destroy();
      this.hlsInstance = null;
      this.hlsRecoveryAttempts = 0;

      // Small delay before reloading
      setTimeout(() => {
        this.loadVideo(src, this.currentTitle, this.onErrorCallback);

        // Try to restore playback position
        this.videoElement.addEventListener('loadedmetadata', () => {
          if (currentTime > 0) {
            this.videoElement.currentTime = currentTime;
          }
        }, { once: true });
      }, 1000);

      return;
    }

    // Standard recovery
    console.log(`HLS recovery attempt ${this.hlsRecoveryAttempts}`);
    hls.recoverMediaError();

    // If still not playing after recovery, try swapping codec
    setTimeout(() => {
      if (this.videoElement.paused) {
        console.log('HLS still paused after recovery, trying to swap codec');
        hls.swapAudioCodec();
        hls.recoverMediaError();
      }
    }, 1000);
  }

  /**
   * Show a message when autoplay is blocked
   */
  showAutoplayBlockedMessage() {
    const message = document.createElement('div');
    message.className = 'autoplay-blocked-message';
    message.style.position = 'absolute';
    message.style.top = '10px';
    message.style.left = '0';
    message.style.right = '0';
    message.style.textAlign = 'center';
    message.style.backgroundColor = 'rgba(0,0,0,0.7)';
    message.style.color = 'white';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '100';
    message.style.pointerEvents = 'none';
    message.textContent = 'Autoplay blocked by browser. Click to play.';

    const container = this.videoElement.parentElement;
    if (container) {
      container.style.position = 'relative';
      container.appendChild(message);

      // Remove the message after 3 seconds
      setTimeout(() => {
        if (container.contains(message)) {
          container.removeChild(message);
        }
      }, 3000);
    }
  }

  /**
   * Check if MediaSource Extensions are supported
   * @returns {boolean} Whether MSE is supported
   */
  isMSESupported() {
    return (
      window.MediaSource &&
      typeof window.MediaSource.isTypeSupported === 'function' &&
      (
        window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"') ||
        window.MediaSource.isTypeSupported('video/mp2t; codecs="avc1.42E01E,mp4a.40.2"') ||
        window.MediaSource.isTypeSupported('video/mp2t')
      )
    );
  }

  /**
   * Load video using MediaSource Extensions
   * @param {string} src - The video source URL
   */
  loadWithMSE(src) {
    console.log('Using MediaSource Extensions for video playback');

    // Check if Shaka Player is available (preferred MSE implementation)
    if (window.shaka) {
      this.loadWithShaka(src);
      return;
    }

    // If Shaka is not available, use our custom MSE implementation
    try {
      // Create a new MediaSource instance
      const mediaSource = new MediaSource();
      this.mediaSource = mediaSource;

      // Set the video source to the MediaSource object URL
      const objectURL = URL.createObjectURL(mediaSource);
      this.videoElement.src = objectURL;

      // Handle MediaSource open event
      mediaSource.addEventListener('sourceopen', () => {
        console.log('MediaSource opened');

        // Create a SourceBuffer
        let mimeType = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
        if (!MediaSource.isTypeSupported(mimeType)) {
          mimeType = 'video/mp4';
        }

        try {
          const sourceBuffer = mediaSource.addSourceBuffer(mimeType);
          this.sourceBuffer = sourceBuffer;

          // Fetch the video data
          fetch(src)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.arrayBuffer();
            })
            .then(arrayBuffer => {
              // Append the data to the SourceBuffer
              sourceBuffer.addEventListener('updateend', () => {
                if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
                  mediaSource.endOfStream();
                  console.log('MediaSource stream ended');

                  if (this.options.autoplay) {
                    this.videoElement.play()
                      .catch(e => console.error('Error auto-playing video with MSE:', e));
                  }
                }
              });

              sourceBuffer.appendBuffer(arrayBuffer);
            })
            .catch(error => {
              console.error('Error fetching video with MSE:', error);
              this.handleError({
                target: this.videoElement,
                type: 'error',
                details: { type: 'mse', error },
                message: 'Error loading video with MediaSource Extensions'
              });

              // Fall back to HTML5 video
              this.loadWithHTML5(src, 'ts');
            });
        } catch (e) {
          console.error('Error creating SourceBuffer:', e);
          // Fall back to HTML5 video
          this.loadWithHTML5(src, 'ts');
        }
      });

      // Handle MediaSource errors
      mediaSource.addEventListener('sourceclose', () => {
        console.log('MediaSource closed');
      });

      mediaSource.addEventListener('sourceended', () => {
        console.log('MediaSource ended');
      });

      mediaSource.addEventListener('error', (e) => {
        console.error('MediaSource error:', e);
        // Fall back to HTML5 video
        this.loadWithHTML5(src, 'ts');
      });

    } catch (e) {
      console.error('Error initializing MediaSource Extensions:', e);
      // Fall back to HTML5 video
      this.loadWithHTML5(src, 'ts');
    }
  }

  /**
   * Load video using Shaka Player (advanced MSE implementation)
   * @param {string} src - The video source URL
   */
  loadWithShaka(src) {
    console.log('Using Shaka Player for video playback');

    // Install polyfills for Shaka Player
    shaka.polyfill.installAll();

    // Check if the browser supports Shaka Player
    if (!shaka.Player.isBrowserSupported()) {
      console.warn('Browser does not support Shaka Player');
      // Fall back to our custom MSE implementation or HTML5 video
      this.mediaSource = null;
      this.loadWithHTML5(src, 'ts');
      return;
    }

    try {
      // Create a Shaka Player instance
      const player = new shaka.Player(this.videoElement);
      this.shakaPlayer = player;

      // Listen for errors
      player.addEventListener('error', (event) => {
        console.error('Shaka Player error:', event.detail);
        // Fall back to HTML5 video
        this.shakaPlayer = null;
        this.loadWithHTML5(src, 'ts');
      });

      // Configure Shaka Player
      player.configure({
        streaming: {
          bufferingGoal: 60,  // Buffer up to 60 seconds
          rebufferingGoal: 2, // Have at least 2 seconds buffered before resuming playback
          bufferBehind: 30,   // Keep 30 seconds of content in the buffer behind the playhead
          retryParameters: {
            maxAttempts: 10,           // Try 10 times before failing
            baseDelay: 1000,           // Start with a 1-second delay between retries
            backoffFactor: 2,          // Double the delay each time
            fuzzFactor: 0.5,           // Randomize delays by +/- 50%
            timeout: 30000             // 30 second timeout for network requests
          }
        },
        abr: {
          enabled: true,               // Enable adaptive bitrate streaming
          defaultBandwidthEstimate: 500000, // 500kbps default
          switchInterval: 8,           // Switch streams every 8 seconds if needed
          bandwidthUpgradeTarget: 0.85 // Upgrade when bandwidth is 85% of the next level
        }
      });

      // Load the video
      player.load(src)
        .then(() => {
          console.log('Shaka Player: Video loaded');

          // Get available video tracks
          const tracks = player.getVariantTracks();
          console.log('Available video tracks:', tracks);

          if (this.options.autoplay) {
            this.videoElement.play()
              .catch(e => console.error('Error auto-playing video with Shaka:', e));
          }
        })
        .catch(error => {
          console.error('Shaka Player load error:', error);
          // Fall back to HTML5 video
          this.shakaPlayer = null;
          this.loadWithHTML5(src, 'ts');
        });

    } catch (e) {
      console.error('Error initializing Shaka Player:', e);
      // Fall back to HTML5 video
      this.shakaPlayer = null;
      this.loadWithHTML5(src, 'ts');
    }
  }

  /**
   * Load video using standard HTML5 video
   * @param {string} src - The video source URL
   * @param {string} ext - The file extension
   */
  loadWithHTML5(src, ext) {
    console.log(`Loading video with HTML5 player, format: ${ext}`);

    // Track browser capabilities for analytics
    this.detectBrowserCapabilities();

    // Get the MIME type or default to mp4
    const mimeType = this.mimeTypes[ext] || 'video/mp4';
    console.log(`Using MIME type: ${mimeType} for extension: ${ext}`);

    // Clear any existing sources first
    this.clearSources();

    // For TS files, use a more comprehensive approach
    if (ext === 'ts') {
      // Add a data attribute to track the original format
      this.videoElement.dataset.originalFormat = 'ts';

      // Try with expanded MIME types for better browser compatibility
      const expandedTsMimeTypes = [
        'video/mp2t',
        'video/mp4',
        'video/mpeg',
        'application/x-mpegURL',
        'application/vnd.apple.mpegURL',
        'video/x-mpegURL',
        'audio/mpegurl',
        'audio/x-mpegurl',
        'application/mpegurl',
        'application/x-mpegurl',
        'video/m2ts',
        'video/x-m2ts',
        'video/ts',
        'video/x-ts'
      ];

      // Check which MIME types are actually supported by this browser
      const supportedMimeTypes = expandedTsMimeTypes.filter(mime => {
        const support = this.videoElement.canPlayType(mime);
        return support !== '' && support !== 'no';
      });

      console.log('Supported MIME types for .ts:', supportedMimeTypes);

      if (supportedMimeTypes.length > 0) {
        // Add sources for supported MIME types only
        supportedMimeTypes.forEach(mimeType => {
          const source = document.createElement('source');
          source.src = src;
          source.type = mimeType;
          this.videoElement.appendChild(source);
        });
      } else {
        // If no supported MIME types, try without specifying type
        const source = document.createElement('source');
        source.src = src;
        this.videoElement.appendChild(source);
      }

      // Add a special note for debugging
      console.log('Added sources for .ts file compatibility');
    } else {
      // For other formats, use the standard MIME type
      const source = document.createElement('source');
      source.src = src;
      source.type = mimeType;
      this.videoElement.appendChild(source);

      // Add a data attribute to track the original format
      this.videoElement.dataset.originalFormat = ext;
    }

    // Add error event listener specifically for this loading attempt
    const errorHandler = (e) => {
      console.error('HTML5 video error during loading:', e);
      // Remove this specific error handler after it fires once
      this.videoElement.removeEventListener('error', errorHandler);
    };
    this.videoElement.addEventListener('error', errorHandler);

    // Add loadeddata event listener to track successful loading
    const loadedHandler = () => {
      console.log('HTML5 video loaded successfully');
      // Remove both handlers after successful load
      this.videoElement.removeEventListener('error', errorHandler);
      this.videoElement.removeEventListener('loadeddata', loadedHandler);
    };
    this.videoElement.addEventListener('loadeddata', loadedHandler);

    // Load the video
    this.videoElement.load();

    // Try to play if autoplay is enabled
    if (this.options.autoplay) {
      this.videoElement.play()
        .then(() => console.log('HTML5 video autoplay started'))
        .catch(e => {
          console.warn('HTML5 video autoplay failed:', e);
          if (e.name === 'NotAllowedError') {
            this.showAutoplayBlockedMessage();
          }
        });
    }

    // Add a multi-stage fallback mechanism
    this.setupHTML5Fallbacks(src, ext);
  }

  /**
   * Set up fallback mechanisms for HTML5 video playback
   * @param {string} src - The video source URL
   * @param {string} ext - The file extension
   */
  setupHTML5Fallbacks(src, ext) {
    // Initialize fallback timeouts array if it doesn't exist
    if (!this.fallbackTimeouts) {
      this.fallbackTimeouts = [];
    }

    // Stage 1: Check if video starts loading within 3 seconds
    const timeout1 = setTimeout(() => {
      if (this.videoElement.readyState === 0) { // HAVE_NOTHING - no data available
        console.log('Video not loading with source elements, trying direct src attribute');
        this.clearSources();
        this.videoElement.src = src;
        this.videoElement.load();

        // Try to play again if autoplay is enabled
        if (this.options.autoplay) {
          this.videoElement.play().catch(e => console.log('Error playing video with direct src:', e));
        }

        // Stage 2: Check if direct src attribute worked after another 3 seconds
        const timeout2 = setTimeout(() => {
          if (this.videoElement.readyState === 0) {
            console.log('Direct src attribute failed, trying with blob URL');

            // Stage 3: Try with a blob URL (helps with some browser security policies)
            this.tryWithBlobUrl(src, ext);
          }
        }, 3000);

        // Track the timeout for cleanup
        this.fallbackTimeouts.push(timeout2);
      }
    }, 3000);

    // Track the timeout for cleanup
    this.fallbackTimeouts.push(timeout1);
  }

  /**
   * Try loading the video with a blob URL
   * @param {string} src - The video source URL
   * @param {string} ext - The file extension
   */
  tryWithBlobUrl(src, ext) {
    console.log('Trying to load video with blob URL');

    // Fetch the video file
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        // Create a blob URL
        const blobUrl = URL.createObjectURL(blob);

        // Set the video source to the blob URL
        this.videoElement.src = blobUrl;
        this.videoElement.load();

        // Try to play if autoplay is enabled
        if (this.options.autoplay) {
          this.videoElement.play().catch(e => console.log('Error playing video with blob URL:', e));
        }

        // Store the blob URL for cleanup
        this.blobUrl = blobUrl;

        // Final check after 3 more seconds
        const timeout3 = setTimeout(() => {
          if (this.videoElement.readyState === 0 && ext === 'ts') {
            console.log('All fallback methods failed for .ts file, showing download option');
            // If we still can't play the video, show a more helpful error message
            this.displayErrorMessage(
              'This TS format video cannot be played directly in your browser. ' +
              'Please download the video to play it with a media player like VLC or try using Chrome/Edge browser.'
            );
          }
        }, 3000);

        // Track the timeout for cleanup
        if (this.fallbackTimeouts) {
          this.fallbackTimeouts.push(timeout3);
        }
      })
      .catch(error => {
        console.error('Error creating blob URL:', error);

        if (ext === 'ts') {
          // Show error message for TS files
          this.displayErrorMessage(
            'This TS format video cannot be played directly in your browser. ' +
            'Please download the video to play it with a media player like VLC or try using Chrome/Edge browser.'
          );
        } else {
          // Generic error for other formats
          this.displayErrorMessage(
            `Error loading video. The ${ext.toUpperCase()} format may not be supported by your browser.`
          );
        }
      });
  }

  /**
   * Detect and log browser capabilities for video playback
   */
  detectBrowserCapabilities() {
    // Only run this once
    if (this.browserCapabilitiesDetected) return;
    this.browserCapabilitiesDetected = true;

    const video = document.createElement('video');

    // Check for basic HTML5 video support
    const hasVideo = !!video.canPlayType;

    // Check for MSE support
    const hasMSE = this.isMSESupported();

    // Check for HLS.js support
    const hasHLS = typeof Hls !== 'undefined' && Hls.isSupported();

    // Check for Shaka Player support
    const hasShaka = typeof shaka !== 'undefined' && shaka.Player && shaka.Player.isBrowserSupported();

    // Check for specific format support
    const formats = {
      mp4: video.canPlayType('video/mp4'),
      webm: video.canPlayType('video/webm'),
      ogg: video.canPlayType('video/ogg'),
      ts: video.canPlayType('video/mp2t'),
      hls: video.canPlayType('application/vnd.apple.mpegURL') || video.canPlayType('application/x-mpegURL')
    };

    // Log browser capabilities
    console.log('Browser video capabilities:', {
      hasVideo,
      hasMSE,
      hasHLS,
      hasShaka,
      formats,
      userAgent: navigator.userAgent
    });

    // Store capabilities for later use
    this.browserCapabilities = {
      hasVideo,
      hasMSE,
      hasHLS,
      hasShaka,
      formats
    };
  }

  /**
   * Clear all source elements from the video element
   */
  clearSources() {
    while (this.videoElement.firstChild) {
      if (this.videoElement.firstChild.tagName === 'SOURCE') {
        this.videoElement.removeChild(this.videoElement.firstChild);
      } else {
        break;
      }
    }
    this.videoElement.removeAttribute('src');

    // Destroy HLS instance if it exists
    if (this.hlsInstance) {
      try {
        this.hlsInstance.destroy();
        this.hlsInstance = null;
        console.log('HLS instance destroyed');
      } catch (e) {
        console.error('Error destroying HLS instance:', e);
      }
    }

    // Remove any error messages
    this.removeErrorMessage();
  }

  /**
   * Handle video errors
   * @param {Event} event - The error event
   */
  handleError(event) {
    console.error('Video error:', event);

    // Create a custom error message based on the file type
    const ext = this.getFileExtension(this.currentSrc);
    let errorMessage = 'Error playing video. ';

    switch (ext) {
      case 'ts':
        errorMessage += 'This TS format may not be supported by your browser. Try using Chrome or Edge, or download the video to play locally.';
        break;
      case 'mkv':
        errorMessage += 'MKV format is not widely supported in browsers. Try downloading the video to play locally.';
        break;
      case 'avi':
        errorMessage += 'AVI format is not widely supported in browsers. Try downloading the video to play locally.';
        break;
      case 'wmv':
        errorMessage += 'WMV format is not widely supported in browsers. Try downloading the video to play locally.';
        break;
      default:
        errorMessage += 'The format may not be supported by your browser.';
    }

    // Display error message
    this.displayErrorMessage(errorMessage);

    // Call error callback if provided
    if (typeof this.onErrorCallback === 'function') {
      this.onErrorCallback(errorMessage, ext);
    }
  }

  /**
   * Display an error message overlay on the video
   * @param {string} message - The error message
   */
  displayErrorMessage(message) {
    // Remove any existing error overlay
    this.removeErrorMessage();

    // Create error overlay
    const overlay = document.createElement('div');
    overlay.className = 'video-error-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.color = 'white';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';
    overlay.style.zIndex = '10';
    overlay.style.fontFamily = 'Arial, sans-serif';

    // Get file extension for specific messaging
    const ext = this.getFileExtension(this.currentSrc);
    const isTS = ext === 'ts';

    // Create a container for the message and buttons
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.maxWidth = '500px';
    container.style.backgroundColor = 'rgba(40, 40, 40, 0.9)';
    container.style.padding = '25px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';

    // Add error icon
    const errorIcon = document.createElement('div');
    errorIcon.innerHTML = '⚠️';
    errorIcon.style.fontSize = '48px';
    errorIcon.style.marginBottom = '15px';
    container.appendChild(errorIcon);

    // Add error message with enhanced formatting
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.fontSize = '16px';
    messageEl.style.lineHeight = '1.5';
    messageEl.style.marginBottom = '20px';
    container.appendChild(messageEl);

    // Add a prominent download button
    const downloadBtn = document.createElement('a');
    downloadBtn.textContent = '⬇️ Download Video to Play Locally';
    downloadBtn.href = this.currentSrc;
    downloadBtn.download = this.currentTitle || 'video';
    downloadBtn.style.display = 'block';
    downloadBtn.style.width = '100%';
    downloadBtn.style.padding = '12px 20px';
    downloadBtn.style.backgroundColor = '#D4AF37';
    downloadBtn.style.color = 'black';
    downloadBtn.style.textDecoration = 'none';
    downloadBtn.style.borderRadius = '4px';
    downloadBtn.style.fontWeight = 'bold';
    downloadBtn.style.fontSize = '16px';
    downloadBtn.style.textAlign = 'center';
    downloadBtn.style.marginBottom = '15px';
    downloadBtn.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
    downloadBtn.style.cursor = 'pointer';
    downloadBtn.style.transition = 'background-color 0.2s';

    // Hover effect
    downloadBtn.onmouseover = () => {
      downloadBtn.style.backgroundColor = '#F0C14B';
    };
    downloadBtn.onmouseout = () => {
      downloadBtn.style.backgroundColor = '#D4AF37';
    };

    container.appendChild(downloadBtn);

    // Add specific instructions for TS files
    if (isTS) {
      const tsInstructions = document.createElement('div');
      tsInstructions.innerHTML = `
        <p style="font-size: 14px; margin-top: 15px; color: #AAA;">
          <strong>Why am I seeing this?</strong><br>
          TS (Transport Stream) files require special support that some browsers don't provide natively.
        </p>
        <ul style="text-align: left; font-size: 14px; color: #AAA; margin-top: 10px; padding-left: 20px;">
          <li>Try using <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> browsers</li>
          <li>Download the file and play it with <strong>VLC Media Player</strong> or another media player</li>
          <li>Check if your browser has the necessary codecs installed</li>
        </ul>
      `;
      container.appendChild(tsInstructions);
    }

    // Add a try again button
    const tryAgainBtn = document.createElement('button');
    tryAgainBtn.textContent = '🔄 Try Again';
    tryAgainBtn.style.marginTop = '15px';
    tryAgainBtn.style.padding = '8px 16px';
    tryAgainBtn.style.backgroundColor = '#555';
    tryAgainBtn.style.border = 'none';
    tryAgainBtn.style.borderRadius = '4px';
    tryAgainBtn.style.color = 'white';
    tryAgainBtn.style.cursor = 'pointer';
    tryAgainBtn.onclick = () => {
      this.removeErrorMessage();
      this.loadVideo(this.currentSrc, this.currentTitle, this.onErrorCallback);
    };
    container.appendChild(tryAgainBtn);

    overlay.appendChild(container);

    // Add the overlay to the video container
    const videoContainer = this.videoElement.parentElement;
    if (videoContainer) {
      videoContainer.style.position = 'relative';
      videoContainer.appendChild(overlay);
    } else {
      // If no container, add it right after the video
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      this.videoElement.parentNode.insertBefore(wrapper, this.videoElement);
      wrapper.appendChild(this.videoElement);
      wrapper.appendChild(overlay);
    }
  }

  /**
   * Remove any error message overlay
   */
  removeErrorMessage() {
    const videoContainer = this.videoElement.parentElement;
    if (videoContainer) {
      const overlay = videoContainer.querySelector('.video-error-overlay');
      if (overlay) {
        videoContainer.removeChild(overlay);
      }
    }
  }

  /**
   * Handle loaded metadata event
   */
  handleLoadedMetadata() {
    console.log('Video metadata loaded');
    this.removeErrorMessage();
  }

  /**
   * Get the file extension from a URL
   * @param {string} url - The URL
   * @returns {string} The file extension
   */
  getFileExtension(url) {
    if (!url) return '';
    const parts = url.split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : '';
  }

  /**
   * Play the video
   */
  play() {
    if (this.videoElement) {
      this.videoElement.play().catch(e => console.error('Error playing video:', e));
    }
  }

  /**
   * Pause the video
   */
  pause() {
    if (this.videoElement) {
      this.videoElement.pause();
    }
  }

  /**
   * Check if a format is supported by the browser
   * @param {string} format - The format to check
   * @returns {boolean} Whether the format is supported
   */
  static isFormatSupported(format) {
    const video = document.createElement('video');

    // For TS files, check multiple support methods
    if (format === 'ts') {
      // First check if HLS.js is available - best option for TS files
      if (window.Hls && Hls.isSupported()) {
        console.log('HLS.js is supported - best option for TS files');
        return true;
      }

      // Check if MediaSource Extensions are available as a fallback
      if (window.MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')) {
        console.log('MediaSource Extensions are supported - may work for some TS files');
        // This is a maybe, not a definite yes
      }

      // Try multiple MIME types that might work for TS files
      const tsMimeTypes = [
        'video/mp2t',
        'video/mp4',
        'video/mpeg',
        'application/x-mpegURL'
      ];

      // Check if any of the MIME types are supported
      for (const mimeType of tsMimeTypes) {
        const support = video.canPlayType(mimeType);
        if (support !== '') {
          console.log(`Browser supports TS files with MIME type: ${mimeType} (${support})`);
          return true;
        }
      }

      // If we got here, TS support is questionable
      console.log('Limited or no TS file support detected in this browser');
      return false;
    }

    // For other formats, check standard support
    // Map format to MIME type
    const mimeTypes = {
      'mp4': 'video/mp4',
      'webm': 'video/webm',
      'ogg': 'video/ogg',
      'ogv': 'video/ogg',
      'mov': 'video/quicktime',
      'mkv': 'video/x-matroska',
      'avi': 'video/x-msvideo',
      'm4v': 'video/x-m4v',
      'flv': 'video/x-flv',
      '3gp': 'video/3gpp',
      'wmv': 'video/x-ms-wmv',
      'mpg': 'video/mpeg',
      'mpeg': 'video/mpeg'
    };

    const mimeType = mimeTypes[format] || '';
    if (!mimeType) return false;

    const support = video.canPlayType(mimeType);
    console.log(`Browser support for ${format} (${mimeType}): ${support}`);
    return support !== '';
  }

  /**
   * Clean up resources
   */
  destroy() {
    // Remove event listeners
    if (this.videoElement) {
      this.videoElement.removeEventListener('error', this.handleError);
      this.videoElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata);

      // Clear any data attributes we've set
      if (this.videoElement.dataset) {
        delete this.videoElement.dataset.originalFormat;
      }
    }

    // Destroy HLS instance if it exists
    if (this.hlsInstance) {
      this.hlsInstance.destroy();
      this.hlsInstance = null;
    }

    // Destroy Shaka Player instance if it exists
    if (this.shakaPlayer) {
      this.shakaPlayer.destroy();
      this.shakaPlayer = null;
    }

    // Clean up MediaSource resources
    if (this.mediaSource) {
      if (this.sourceBuffer) {
        try {
          this.mediaSource.removeSourceBuffer(this.sourceBuffer);
        } catch (e) {
          console.error('Error removing SourceBuffer:', e);
        }
        this.sourceBuffer = null;
      }
      this.mediaSource = null;
    }

    // Revoke any blob URLs we've created
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
      this.blobUrl = null;
    }

    // Remove error message
    this.removeErrorMessage();

    // Clear any timeouts we might have set
    if (this.fallbackTimeouts) {
      this.fallbackTimeouts.forEach(timeout => clearTimeout(timeout));
      this.fallbackTimeouts = [];
    }

    // Reset error tracking
    this.hlsErrorCount = 0;
    this.hlsRecoveryAttempts = 0;

    console.log('Video player resources cleaned up');
  }
}

// Export the VideoPlayer class
window.VideoPlayer = VideoPlayer;
