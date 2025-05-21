// scripts.js for Eros Exposé - Manual Array System (No Manifest)

// 1. List all images and videos here. Add new entries as you add files.
// Using relative paths to fix 404 errors
const images = [
  { path: 'src/images/2338144_17b.jpg', caption: '2338144_17b.jpg' },
  { path: 'src/images/2338144_16b.jpg', caption: '2338144_16b.jpg' },
  { path: 'src/images/2338144_15b.jpg', caption: '2338144_15b.jpg' },
  { path: 'src/images/2338144_14b.jpg', caption: '2338144_14b.jpg' },
  { path: 'src/images/2338144_13b.jpg', caption: '2338144_13b.jpg' },
  { path: 'src/images/2338144_12b.jpg', caption: '2338144_12b.jpg' },
  { path: 'src/images/2338144_11b.jpg', caption: '2338144_11b.jpg' },
  { path: 'src/images/2338144_10b.jpg', caption: '2338144_10b.jpg' },
  { path: 'src/images/2338144_09b.jpg', caption: '2338144_09b.jpg' },
  { path: 'src/images/2338144_08b.jpg', caption: '2338144_08b.jpg' },
  { path: 'src/images/2338144_07b.jpg', caption: '2338144_07b.jpg' },
  { path: 'src/images/2338144_06b.jpg', caption: '2338144_06b.jpg' },
  { path: 'src/images/2338144_05b.jpg', caption: '2338144_05b.jpg' },
  { path: 'src/images/2338144_04b.jpg', caption: '2338144_04b.jpg' },
  { path: 'src/images/2338144_03b.jpg', caption: '2338144_03b.jpg' },
  { path: 'src/images/2338144_02b.jpg', caption: '2338144_02b.jpg' },
  { path: 'src/images/2338144_01b.jpg', caption: '2338144_01b.jpg' },
  { path: 'src/images/2338144_00b.jpg', caption: '2338144_00b.jpg' },
  { path: 'src/images/2496013_21b.jpg', caption: '2496013_21b.jpg' },
  { path: 'src/images/2496013_20b.jpg', caption: '2496013_20b.jpg' },
  { path: 'src/images/2496013_19b.jpg', caption: '2496013_19b.jpg' },
  { path: 'src/images/2496013_18b.jpg', caption: '2496013_18b.jpg' },
  { path: 'src/images/2496013_17b.jpg', caption: '2496013_17b.jpg' },
  { path: 'src/images/2496013_16b.jpg', caption: '2496013_16b.jpg' },
  { path: 'src/images/2496013_15b.jpg', caption: '2496013_15b.jpg' },
  { path: 'src/images/2496013_14b.jpg', caption: '2496013_14b.jpg' },
  { path: 'src/images/2496013_13b.jpg', caption: '2496013_13b.jpg' },
  { path: 'src/images/2496013_12b.jpg', caption: '2496013_12b.jpg' },
  { path: 'src/images/2496013_11b.jpg', caption: '2496013_11b.jpg' },
  { path: 'src/images/2496013_10b.jpg', caption: '2496013_10b.jpg' },
  { path: 'src/images/2496013_09b.jpg', caption: '2496013_09b.jpg' },
  { path: 'src/images/2496013_08b.jpg', caption: '2496013_08b.jpg' },
  { path: 'src/images/2496013_06b.jpg', caption: '2496013_06b.jpg' },
  { path: 'src/images/2496013_05b.jpg', caption: '2496013_05b.jpg' },
  { path: 'src/images/2496013_04b.jpg', caption: '2496013_04b.jpg' },
  { path: 'src/images/2496013_03b.jpg', caption: '2496013_03b.jpg' },
  { path: 'src/images/2496013_02b.jpg', caption: '2496013_02b.jpg' },
  { path: 'src/images/2496013_01b.jpg', caption: '2496013_01b.jpg' },
  { path: 'src/images/2496013_00b.jpg', caption: '2496013_00b.jpg' },
  { path: 'src/images/4299608_23big.jpg', caption: '4299608_23big.jpg' },
  { path: 'src/images/4299608_22big.jpg', caption: '4299608_22big.jpg' },
  { path: 'src/images/4299608_21big.jpg', caption: '4299608_21big.jpg' },
  { path: 'src/images/4299608_19big.jpg', caption: '4299608_19big.jpg' },
  { path: 'src/images/4299608_18big.jpg', caption: '4299608_18big.jpg' },
  { path: 'src/images/4299608_16big.jpg', caption: '4299608_16big.jpg' },
  { path: 'src/images/4299608_15big.jpg', caption: '4299608_15big.jpg' },
  { path: 'src/images/4299608_14big.jpg', caption: '4299608_14big.jpg' },
  { path: 'src/images/4299608_13big.jpg', caption: '4299608_13big.jpg' },
  { path: 'src/images/4299608_12big.jpg', caption: '4299608_12big.jpg' },
  { path: 'src/images/4299608_11big.jpg', caption: '4299608_11big.jpg' },
  { path: 'src/images/4299608_09big.jpg', caption: '4299608_09big.jpg' },
  { path: 'src/images/4299608_08big.jpg', caption: '4299608_08big.jpg' },
  { path: 'src/images/4299608_07big.jpg', caption: '4299608_07big.jpg' },
  { path: 'src/images/4299608_06big.jpg', caption: '4299608_06big.jpg' },
  { path: 'src/images/4299608_05big.jpg', caption: '4299608_05big.jpg' },
  { path: 'src/images/4299608_04big.jpg', caption: '4299608_04big.jpg' },
  { path: 'src/images/4299608_03big.jpg', caption: '4299608_03big.jpg' },
  { path: 'src/images/4299608_02big.jpg', caption: '4299608_02big.jpg' },
  { path: 'src/images/4299608_01big.jpg', caption: '4299608_01big.jpg' },
  { path: 'src/images/4057128_24big.jpg', caption: '4057128_24big.jpg' },
  { path: 'src/images/4057128_23big.jpg', caption: '4057128_23big.jpg' },
  { path: 'src/images/4057128_21big.jpg', caption: '4057128_21big.jpg' },
  { path: 'src/images/4057128_20big.jpg', caption: '4057128_20big.jpg' },
  { path: 'src/images/4057128_17big.jpg', caption: '4057128_17big.jpg' },
  { path: 'src/images/4057128_16big.jpg', caption: '4057128_16big.jpg' },
  { path: 'src/images/4057128_15big.jpg', caption: '4057128_15big.jpg' },
  { path: 'src/images/4057128_14big.jpg', caption: '4057128_14big.jpg' },
  { path: 'src/images/4057128_13big.jpg', caption: '4057128_13big.jpg' },
  { path: 'src/images/4057128_12big.jpg', caption: '4057128_12big.jpg' },
  { path: 'src/images/4057128_11big.jpg', caption: '4057128_11big.jpg' },
  { path: 'src/images/4057128_09big.jpg', caption: '4057128_09big.jpg' },
  { path: 'src/images/4057128_10big.jpg', caption: '4057128_10big.jpg' },
  { path: 'src/images/4057128_07big.jpg', caption: '4057128_07big.jpg' },
  { path: 'src/images/4057128_06big.jpg', caption: '4057128_06big.jpg' },
  { path: 'src/images/4057128_05big.jpg', caption: '4057128_05big.jpg' },
  { path: 'src/images/4057128_02big.jpg', caption: '4057128_02big.jpg' },
  { path: 'src/images/4057128_01big.jpg', caption: '4057128_01big.jpg' },
  { path: 'src/images/3796682_19big.jpg', caption: '3796682_19big.jpg' },
  { path: 'src/images/3796682_18big.jpg', caption: '3796682_18big.jpg' },
  { path: 'src/images/3796682_13big.jpg', caption: '3796682_13big.jpg' },
  { path: 'src/images/3796682_11big.jpg', caption: '3796682_11big.jpg' },
  { path: 'src/images/3796682_09big.jpg', caption: '3796682_09big.jpg' },
  { path: 'src/images/3796682_07big.jpg', caption: '3796682_07big.jpg' },
  { path: 'src/images/3796682_06big.jpg', caption: '3796682_06big.jpg' },
  { path: 'src/images/3796682_03big.jpg', caption: '3796682_03big.jpg' },
  { path: 'src/images/3796682_04big.jpg', caption: '3796682_04big.jpg' },
  { path: 'src/images/3796682_02big.jpg', caption: '3796682_02big.jpg' },
  { path: 'src/images/3796682_01big.jpg', caption: '3796682_01big.jpg' },
  { path: 'src/images/2506788_13b.jpg', caption: '2506788_13b.jpg' },
  { path: 'src/images/2506788_12b.jpg', caption: '2506788_12b.jpg' },
  { path: 'src/images/2506788_14b.jpg', caption: '2506788_14b.jpg' },
  { path: 'src/images/2506788_15b.jpg', caption: '2506788_15b.jpg' },
  { path: 'src/images/2506788_16b.jpg', caption: '2506788_16b.jpg' },
  { path: 'src/images/2506788_17b.jpg', caption: '2506788_17b.jpg' },
  { path: 'src/images/2944558_06b.jpg', caption: '2944558_06b.jpg' },
  { path: 'src/images/2944558_07b.jpg', caption: '2944558_07b.jpg' },
  { path: 'src/images/2944558_09b.jpg', caption: '2944558_09b.jpg' },
  { path: 'src/images/2944558_10b.jpg', caption: '2944558_10b.jpg' },
  { path: 'src/images/2944558_11b.jpg', caption: '2944558_11b.jpg' },
  { path: 'src/images/2944558_12b.jpg', caption: '2944558_12b.jpg' },
  { path: 'src/images/2944558_13b.jpg', caption: '2944558_13b.jpg' },
  { path: 'src/images/2944558_14b.jpg', caption: '2944558_14b.jpg' },
  { path: 'src/images/2944558_15b.jpg', caption: '2944558_15b.jpg' },
  { path: 'src/images/2944558_16b.jpg', caption: '2944558_16b.jpg' },
  { path: 'src/images/2944558_17b.jpg', caption: '2944558_17b.jpg' },
  { path: 'src/images/2944558_18b.jpg', caption: '2944558_18b.jpg' },
  { path: 'src/images/2944558_19b.jpg', caption: '2944558_19b.jpg' },
  { path: 'src/images/3771179_01big.jpg', caption: '3771179_01big.jpg' },
  { path: 'src/images/3771179_02big.jpg', caption: '3771179_02big.jpg' },
  { path: 'src/images/3771179_04big.jpg', caption: '3771179_04big.jpg' },
  { path: 'src/images/3771179_06big.jpg', caption: '3771179_06big.jpg' },
  { path: 'src/images/3771179_08big.jpg', caption: '3771179_08big.jpg' },
  { path: 'src/images/3771179_09big.jpg', caption: '3771179_09big.jpg' },
  { path: 'src/images/3771179_10big.jpg', caption: '3771179_10big.jpg' },
  { path: 'src/images/3771179_12big.jpg', caption: '3771179_12big.jpg' },
  { path: 'src/images/3771179_13big.jpg', caption: '3771179_13big.jpg' },
  { path: 'src/images/3771179_15big.jpg', caption: '3771179_15big.jpg' },
  { path: 'src/images/3771179_18big.jpg', caption: '3771179_18big.jpg' },
  { path: 'src/images/3771179_19big.jpg', caption: '3771179_19big.jpg' },
  { path: 'src/images/3771179_21big.jpg', caption: '3771179_21big.jpg' },
  { path: 'src/images/3771179_22big.jpg', caption: '3771179_22big.jpg' },
  { path: 'src/images/3771179_23big.jpg', caption: '3771179_23big.jpg' },
  { path: 'src/images/3771179_24big.jpg', caption: '3771179_24big.jpg' },
  { path: 'src/images/4357835_02big.jpg', caption: '4357835_02big.jpg' },
  { path: 'src/images/4357835_03big.jpg', caption: '4357835_03big.jpg' },
  { path: 'src/images/4357835_04big.jpg', caption: '4357835_04big.jpg' },
  { path: 'src/images/4357835_05big.jpg', caption: '4357835_05big.jpg' },
  { path: 'src/images/4357835_06big.jpg', caption: '4357835_06big.jpg' },
  { path: 'src/images/4357835_07big.jpg', caption: '4357835_07big.jpg' },
  { path: 'src/images/4357835_08big.jpg', caption: '4357835_08big.jpg' },
  { path: 'src/images/4357835_10big.jpg', caption: '4357835_10big.jpg' },
  { path: 'src/images/4357835_11big.jpg', caption: '4357835_11big.jpg' },
  { path: 'src/images/4357835_12big.jpg', caption: '4357835_12big.jpg' },
  { path: 'src/images/4357835_24big.jpg', caption: '4357835_24big.jpg' },
  { path: 'src/images/4629444_02big.jpg', caption: '4629444_02big.jpg' },
  { path: 'src/images/4629444_03big.jpg', caption: '4629444_03big.jpg' },
  { path: 'src/images/4629444_04big.jpg', caption: '4629444_04big.jpg' },
  { path: 'src/images/4629444_05big.jpg', caption: '4629444_05big.jpg' },
  { path: 'src/images/4629444_06big.jpg', caption: '4629444_06big.jpg' },
  { path: 'src/images/4629444_11big.jpg', caption: '4629444_11big.jpg' },
  { path: 'src/images/4629444_18big.jpg', caption: '4629444_18big.jpg' },
  { path: 'src/images/4629444_22big.jpg', caption: '4629444_22big.jpg' },
  { path: 'src/images/4629444_23big.jpg', caption: '4629444_23big.jpg' },
  { path: 'src/images/4629444_24big.jpg', caption: '4629444_24big.jpg' },
  { path: 'src/images/4666316_08big.jpg', caption: '4666316_08big.jpg' },
  { path: 'src/images/4666316_14big.jpg', caption: '4666316_14big.jpg' }
];

// --- AUTO-GENERATED VIDEO ARRAY ---
// This array is generated based on the actual files in src/videos and src/thumbnails.
// If both .mp4 and .ts exist for a video, .mp4 is preferred for playback.
// Thumbnails are always used from src/thumbnails with the same base name as the video (with .jpg extension).
// If a thumbnail is missing, a fallback image is used.
// NOTE: For .ts file support, users should use a modern browser like Chrome or Edge. Firefox may not support .ts playback natively. Prefer .mp4 for best compatibility.
// Using relative paths to fix 404 errors
const videos = [
  { path: 'src/videos/Full Video - The best of hot Arabic MILF Sasha Pearl.ts', title: 'Full Video - The best of hot Arabic MILF Sasha Pearl', thumbnail: 'src/thumbnails/Full Video - The best of hot Arabic MILF Sasha Pearl.jpg' },
  { path: 'src/videos/Femme Arab En Hijab Baisé Comme Une Salope . Beurette Amateur Voilée Squirt 💦💦💦 - Pornhub.com.ts', title: 'Femme Arab En Hijab Baisé Comme Une Salope . Beurette Amateur Voilée Squirt 💦💦💦 - Pornhub.com', thumbnail: 'src/thumbnails/Femme Arab En Hijab Baisé Comme Une Salope . Beurette Amateur Voilée Squirt 💦💦💦 - Pornhub.com.jpg' },
  { path: 'src/videos/MIA KHALIFA - Mia Loves to Share Big Dick with her Stepmom or a Friend - Pornhub.com.ts', title: 'MIA KHALIFA - Mia Loves to Share Big Dick with her Stepmom or a Friend - Pornhub.com', thumbnail: 'src/thumbnails/MIA KHALIFA - Mia Loves to Share Big Dick with her Stepmom or a Friend - Pornhub.com.jpg' },
  { path: 'src/videos/بیدار شدم دیدم کنارم نشسته میگه دوستت یه چیزایی بهم گفته پر مکالمه داستانی Step Mom - Pornhub.com.ts', title: 'بیدار شدم دیدم کنارم نشسته میگه دوستت یه چیزایی بهم گفته پر مکالمه داستانی Step Mom - Pornhub.com', thumbnail: 'src/thumbnails/بیدار شدم دیدم کنارم نشسته میگه دوستت یه چیزایی بهم گفته پر مکالمه داستانی Step Mom - Pornhub.com.jpg' },
  { path: 'src/videos/اححححح حبيبي شبعني حوا اممممم على حويا ضرب ليا اححح حويني احبيبي Sex Marocain - Pornhub.com.ts', title: 'اححححح حبيبي شبعني حوا اممممم على حويا ضرب ليا اححح حويني احبيبي Sex Marocain - Pornhub.com', thumbnail: 'src/thumbnails/اححححح حبيبي شبعني حوا اممممم على حويا ضرب ليا اححح حويني احبيبي Sex Marocain - Pornhub.com.jpg' },
  { path: 'src/videos/خارم میگه من همیشه به تو فکر می کردم سکس داستانی مکالمه فارسی قسمت آخر Step Sister - Pornhub.com.ts', title: 'خارم میگه من همیشه به تو فکر می کردم سکس داستانی مکالمه فارسی قسمت آخر Step Sister - Pornhub.com', thumbnail: 'src/thumbnails/خارم میگه من همیشه به تو فکر می کردم سکس داستانی مکالمه فارسی قسمت آخر Step Sister - Pornhub.com.jpg' },
  { path: 'src/videos/Hijab Muslim Babe Gets Roughly Dominated - Pornhub.com.ts', title: 'Hijab Muslim Babe Gets Roughly Dominated - Pornhub.com', thumbnail: 'src/thumbnails/Hijab Muslim Babe Gets Roughly Dominated - Pornhub.com.jpg' },
  { path: 'src/videos/Saudi Barbienjd getting Piped down by a BBC- باربي نجد السعوديه مع فحل اسود يروضها - Pornhub.com.ts', title: 'Saudi Barbienjd getting Piped down by a BBC- باربي نجد السعوديه مع فحل اسود يروضها - Pornhub.com', thumbnail: 'src/thumbnails/Saudi Barbienjd getting Piped down by a BBC- باربي نجد السعوديه مع فحل اسود يروضها - Pornhub.com.jpg' },
  { path: 'src/videos/Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com.ts', title: 'Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com', thumbnail: 'src/thumbnails/Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com.jpg' },
  { path: 'src/videos/Jamaican Cheating Wife Craving for some Arab Cum - Pornhub.com.ts', title: 'Jamaican Cheating Wife Craving for some Arab Cum - Pornhub.com', thumbnail: 'src/thumbnails/Jamaican Cheating Wife Craving for some Arab Cum - Pornhub.com.jpg' },
  { path: 'src/videos/Muslim Wife Sex Tape - Pornhub.com.ts', title: 'Muslim Wife Sex Tape - Pornhub.com', thumbnail: 'src/thumbnails/Muslim Wife Sex Tape - Pornhub.com.jpg' },
  { path: 'src/videos/ديوث مصري تستدعي صديق ابنها سالم العنتيل ليقوم بالواجب وقت ما زوجها فالشغل - Pornhub.com.ts', title: 'ديوث مصري تستدعي صديق ابنها سالم العنتيل ليقوم بالواجب وقت ما زوجها فالشغل - Pornhub.com', thumbnail: 'src/thumbnails/ديوث مصري تستدعي صديق ابنها سالم العنتيل ليقوم بالواجب وقت ما زوجها فالشغل - Pornhub.com.jpg' },
  { path: 'src/videos/المعلم ينيك نوسة وتقوله عايزة امص زبك يامعلم دخل زبك فى كسى - Pornhub.com.ts', title: 'المعلم ينيك نوسة وتقوله عايزة امص زبك يامعلم دخل زبك فى كسى - Pornhub.com', thumbnail: 'src/thumbnails/المعلم ينيك نوسة وتقوله عايزة امص زبك يامعلم دخل زبك فى كسى - Pornhub.com.jpg' },
  { path: 'src/videos/MIA KHALIFA - Busty Arab Babe taking Dick from White Man with Big Cock - Pornhub.com.ts', title: 'MIA KHALIFA - Busty Arab Babe taking Dick from White Man with Big Cock - Pornhub.com', thumbnail: 'src/thumbnails/MIA KHALIFA - Busty Arab Babe taking Dick from White Man with Big Cock - Pornhub.com.jpg' },
  { path: 'src/videos/My Sisters Hot Big Titty Horny best Friend Catches me Jerking off to her in the Shower - Pornhub.com.ts', title: 'My Sisters Hot Big Titty Horny best Friend Catches me Jerking off to her in the Shower - Pornhub.com', thumbnail: 'src/thumbnails/My Sisters Hot Big Titty Horny best Friend Catches me Jerking off to her in the Shower - Pornhub.com.jpg' },
  { path: 'src/videos/Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard.ts', title: 'Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard', thumbnail: 'src/thumbnails/Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard.jpg' },
  { path: 'src/videos/Sexy 18yo BABE Stays for Passionate Fucking & Gets first EXTREME SQUIRT\'S 💦 - Pornhub.com.ts', title: 'Sexy 18yo BABE Stays for Passionate Fucking & Gets first EXTREME SQUIRT\'S 💦 - Pornhub.com', thumbnail: 'src/thumbnails/Sexy 18yo BABE Stays for Passionate Fucking & Gets first EXTREME SQUIRT\'S 💦 - Pornhub.com.jpg' },
  { path: 'src/videos/Missionary SQUUUIRTING Compilation !!! - Pornhub.com.ts', title: 'Missionary SQUUUIRTING Compilation !!! - Pornhub.com', thumbnail: 'src/thumbnails/Missionary SQUUUIRTING Compilation !!! - Pornhub.com.jpg' },
  { path: 'src/videos/EXTREME SQUIRT🚨 Intense Fucking TEEN makes her Cum Hard - Pornhub.com.ts', title: 'EXTREME SQUIRT🚨 Intense Fucking TEEN makes her Cum Hard - Pornhub.com', thumbnail: 'src/thumbnails/EXTREME SQUIRT🚨 Intense Fucking TEEN makes her Cum Hard - Pornhub.com.jpg' },
  { path: 'src/videos/I go to my Stepsister\'s Sauna and Fuck her Hard Alone. - Pornhub.com.ts', title: 'I go to my Stepsister\'s Sauna and Fuck her Hard Alone. - Pornhub.com', thumbnail: 'src/thumbnails/I go to my Stepsister\'s Sauna and Fuck her Hard Alone. - Pornhub.com.jpg' },
  { path: 'src/videos/Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard.mp4', title: 'Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard', thumbnail: 'src/thumbnails/Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard.jpg' },
  { path: 'src/videos/EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.ts', title: 'EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com', thumbnail: 'src/thumbnails/EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.jpg' },
  { path: 'src/videos/EXTREME SQUIRTING ORGASMS & ROUGH FUCKING! the BEST SQUIRT COMPILATION on Pornhub - Mimi Cica - Pornhub.com.ts', title: 'EXTREME SQUIRTING ORGASMS & ROUGH FUCKING! the BEST SQUIRT COMPILATION on Pornhub - Mimi Cica - Pornhub.com', thumbnail: 'src/thumbnails/EXTREME SQUIRTING ORGASMS & ROUGH FUCKING! the BEST SQUIRT COMPILATION on Pornhub - Mimi Cica - Pornhub.com.jpg' },
  { path: 'src/videos/Full Video - PropertySex Horny Agent with Huge Natural Tits Makes Sex Video with Homebuyer.ts', title: 'Full Video - PropertySex Horny Agent with Huge Natural Tits Makes Sex Video with Homebuyer', thumbnail: 'src/thumbnails/Full Video - PropertySex Horny Agent with Huge Natural Tits Makes Sex Video with Homebuyer.jpg' },
  { path: 'src/videos/I Love Watching Netflix with my Stepdad, can I Lie on your Lap. - Pornhub.com.ts', title: 'I Love Watching Netflix with my Stepdad, can I Lie on your Lap. - Pornhub.com', thumbnail: 'src/thumbnails/I Love Watching Netflix with my Stepdad, can I Lie on your Lap. - Pornhub.com.jpg' },
  { path: 'src/videos/BANGBROS - Venezuelan Hottie La Sirena 69 is Fucking Flawless with her Big Ass and Big Tits - Pornhub.com.ts', title: 'BANGBROS - Venezuelan Hottie La Sirena 69 is Fucking Flawless with her Big Ass and Big Tits - Pornhub.com', thumbnail: 'src/thumbnails/BANGBROS - Venezuelan Hottie La Sirena 69 is Fucking Flawless with her Big Ass and Big Tits - Pornhub.com.jpg' },
  { path: 'src/videos/Tgirl Gets Fucked in Anal while Talking to a Barmaid - Pornhub.com.ts', title: 'Tgirl Gets Fucked in Anal while Talking to a Barmaid - Pornhub.com', thumbnail: 'src/thumbnails/Tgirl Gets Fucked in Anal while Talking to a Barmaid - Pornhub.com.jpg' },
  { path: 'src/videos/MILF Wife Creamed and Waited for her Husband. Sexy Position for Cum - Pornhub.com.ts', title: 'MILF Wife Creamed and Waited for her Husband. Sexy Position for Cum - Pornhub.com', thumbnail: 'src/thumbnails/MILF Wife Creamed and Waited for her Husband. Sexy Position for Cum - Pornhub.com.jpg' },
  { path: 'src/videos/Watch Kenzie Taylor Drives Herself Crazy Draining BBC - Blowjob, Cowgirl, Big Tits Porn.mp4', title: 'Watch Kenzie Taylor Drives Herself Crazy Draining BBC - Blowjob, Cowgirl, Big Tits Porn', thumbnail: 'src/thumbnails/Watch Kenzie Taylor Drives Herself Crazy Draining BBC - Blowjob, Cowgirl, Big Tits Porn.jpg' },
  { path: 'src/videos/Watch Firm torso, hot strides and a wet finish. - Bounce, Amateur, Cowgirl Porn.mp4', title: 'Watch Firm torso, hot strides and a wet finish. - Bounce, Amateur, Cowgirl Porn', thumbnail: 'src/thumbnails/Watch Firm torso, hot strides and a wet finish. - Bounce, Amateur, Cowgirl Porn.jpg' },
  { path: 'src/videos/Watch BLACKEDRAW Gorgeous Little Blonde Dakota Lyn Gets Her Tight Pussy Filled Up - Bbc, Blonde, Facial Porn.mp4', title: 'Watch BLACKEDRAW Gorgeous Little Blonde Dakota Lyn Gets Her Tight Pussy Filled Up - Bbc, Blonde, Facial Porn', thumbnail: 'src/thumbnails/Watch BLACKEDRAW Gorgeous Little Blonde Dakota Lyn Gets Her Tight Pussy Filled Up - Bbc, Blonde, Facial Porn.jpg' },
  { path: 'src/videos/Watch BLACKED Curvy BBC Goddess Blake Blossom Seduces Bestie\'s Man - Bbc, Doggy, Blonde Porn.mp4', title: 'Watch BLACKED Curvy BBC Goddess Blake Blossom Seduces Bestie\'s Man - Bbc, Doggy, Blonde Porn', thumbnail: 'src/thumbnails/Watch BLACKED Curvy BBC Goddess Blake Blossom Seduces Bestie\'s Man - Bbc, Doggy, Blonde Porn.jpg' },
  { path: 'src/videos/Watch BLACKEDRAW Super Model Tiffany Tatum Cant Contain Her Excitement For BBC - Bbc, Oil, Anal Porn.mp4', title: 'Watch BLACKEDRAW Super Model Tiffany Tatum Cant Contain Her Excitement For BBC - Bbc, Oil, Anal Porn', thumbnail: 'src/thumbnails/Watch BLACKEDRAW Super Model Tiffany Tatum Cant Contain Her Excitement For BBC - Bbc, Oil, Anal Porn.jpg' },
  { path: 'src/videos/Watch WIFEY Gorgeous Redheaded Hotwife Jessi Rae Takes Every Inch Of Jason Luv\'s BBC - Bbc, Doggy, Blowjob Porn.mp4', title: 'Watch WIFEY Gorgeous Redheaded Hotwife Jessi Rae Takes Every Inch Of Jason Luv\'s BBC - Bbc, Doggy, Blowjob Porn', thumbnail: 'src/thumbnails/Watch WIFEY Gorgeous Redheaded Hotwife Jessi Rae Takes Every Inch Of Jason Luv\'s BBC - Bbc, Doggy, Blowjob Porn.jpg' },
  { path: 'src/videos/Watch MODERN-DAY SINS - Anal Hungry Petite Cheerleader Alexis Tae Fucks BF\'s Roommate & Stepdad - PART 1&2 - Doggy, Blowjob, Cowgirl Porn.mp4', title: 'Watch MODERN-DAY SINS - Anal Hungry Petite Cheerleader Alexis Tae Fucks BF\'s Roommate & Stepdad - PART 1&2 - Doggy, Blowjob, Cowgirl Porn', thumbnail: 'src/thumbnails/Watch MODERN-DAY SINS - Anal Hungry Petite Cheerleader Alexis Tae Fucks BF\'s Roommate & Stepdad - PART 1&2 - Doggy, Blowjob, Cowgirl Porn.jpg' },
  { path: 'src/videos/Watch Horny babe Madison Wilde fucks big dick BF then Goes on Blind Date afterwards - S4-E4 - Pov, Doggy, Latina Porn.mp4', title: 'Watch Horny babe Madison Wilde fucks big dick BF then Goes on Blind Date afterwards - S4-E4 - Pov, Doggy, Latina Porn', thumbnail: 'src/thumbnails/Watch Horny babe Madison Wilde fucks big dick BF then Goes on Blind Date afterwards - S4-E4 - Pov, Doggy, Latina Porn.jpg' },
  { path: 'src/videos/Watch Casca Akashova gets big dick instead of dildo. - Ass, Pussy, Blonde Porn.mp4', title: 'Watch Casca Akashova gets big dick instead of dildo. - Ass, Pussy, Blonde Porn', thumbnail: 'src/thumbnails/Watch Casca Akashova gets big dick instead of dildo. - Ass, Pussy, Blonde Porn.jpg' },
  { path: 'src/videos/Watch VIXENPLUS Cheating MILF Brandi Love\'s First Big Black Cock - Bbc, Blonde, Facial Porn.mp4', title: 'Watch VIXENPLUS Cheating MILF Brandi Love\'s First Big Black Cock - Bbc, Blonde, Facial Porn', thumbnail: 'src/thumbnails/Watch VIXENPLUS Cheating MILF Brandi Love\'s First Big Black Cock - Bbc, Blonde, Facial Porn.jpg' },
  { path: 'src/videos/Watch Cum - Blowjob, Cumshot, Missonary Porn.mp4', title: 'Watch Cum - Blowjob, Cumshot, Missonary Porn', thumbnail: 'src/thumbnails/Watch Cum - Blowjob, Cumshot, Missonary Porn.jpg' },
  { path: 'src/videos/Watch Little Angel enjoys a POV hardcore fuck session - Doggy, Petite, Blowjob Porn.mp4', title: 'Watch Little Angel enjoys a POV hardcore fuck session - Doggy, Petite, Blowjob Porn', thumbnail: 'src/thumbnails/Watch Little Angel enjoys a POV hardcore fuck session - Doggy, Petite, Blowjob Porn.jpg' },
  { path: 'src/videos/Watch Jules Jordan - Double The Latina Heat- Baby Nicols & Brandy Salazar Share Lexington Steele\'s BBC - Ffm, Babe, Latina Porn.mp4', title: 'Watch Jules Jordan - Double The Latina Heat- Baby Nicols & Brandy Salazar Share Lexington Steele\'s BBC - Ffm, Babe, Latina Porn', thumbnail: 'src/thumbnails/Watch Jules Jordan - Double The Latina Heat- Baby Nicols & Brandy Salazar Share Lexington Steele\'s BBC - Ffm, Babe, Latina Porn.jpg' },
  { path: 'src/videos/Watch How does your ass taste on my big dick. - Ass, Anal, Babe Porn.mp4', title: 'Watch How does your ass taste on my big dick. - Ass, Anal, Babe Porn', thumbnail: 'src/thumbnails/Watch How does your ass taste on my big dick. - Ass, Anal, Babe Porn.jpg' },
  { path: 'src/videos/Watch BigTit Brunette Sheena Ryder Tells Stepson She is Ready for Breeding Person S4-E6 - Pov, Babe, Milf Porn.mp4', title: 'Watch BigTit Brunette Sheena Ryder Tells Stepson She is Ready for Breeding Person S4-E6 - Pov, Babe, Milf Porn', thumbnail: 'src/thumbnails/Watch BigTit Brunette Sheena Ryder Tells Stepson She is Ready for Breeding Person S4-E6 - Pov, Babe, Milf Porn.jpg' },
  { path: 'src/videos/Watch LET ME PLEASE THAT COCK - LEXIS STAR - Babe, Milf, Bigass Porn.mp4', title: 'Watch LET ME PLEASE THAT COCK - LEXIS STAR - Babe, Milf, Bigass Porn', thumbnail: 'src/thumbnails/Watch LET ME PLEASE THAT COCK - LEXIS STAR - Babe, Milf, Bigass Porn.jpg' },
  { path: 'src/videos/Watch XXXmas Deliver-Ohh! - Doggy, Blonde, Big Ass Porn.mp4', title: 'Watch XXXmas Deliver-Ohh! - Doggy, Blonde, Big Ass Porn', thumbnail: 'src/thumbnails/Watch XXXmas Deliver-Ohh! - Doggy, Blonde, Big Ass Porn.jpg' },
  { path: 'src/videos/Watch Bed for three - Bbc, Ffm, Teen Porn.mp4', title: 'Watch Bed for three - Bbc, Ffm, Teen Porn', thumbnail: 'src/thumbnails/Watch Bed for three - Bbc, Ffm, Teen Porn.jpg' },
  { path: 'src/videos/Watch FAMILYXXX - Luscious Big Tits Stepmom Let\'s it All Flow (Becky Bandini) - Mom, Milf, Doggy Porn.mp4', title: 'Watch FAMILYXXX - Luscious Big Tits Stepmom Let\'s it All Flow (Becky Bandini) - Mom, Milf, Doggy Porn', thumbnail: 'src/thumbnails/Watch FAMILYXXX - Luscious Big Tits Stepmom Let\'s it All Flow (Becky Bandini) - Mom, Milf, Doggy Porn.jpg' },
  { path: 'src/videos/Watch VIXENPLUS Wife Lies To Husband To Hook Up with BBC - Bbc, Doggy, Riding Porn.mp4', title: 'Watch VIXENPLUS Wife Lies To Husband To Hook Up with BBC - Bbc, Doggy, Riding Porn', thumbnail: 'src/thumbnails/Watch VIXENPLUS Wife Lies To Husband To Hook Up with BBC - Bbc, Doggy, Riding Porn.jpg' },
  { path: 'src/videos/Watch Hot MILF Rachael Cavalli gets dicked down by boyfriend\'s son - Milf, Doggy, Pussy Porn.mp4', title: 'Watch Hot MILF Rachael Cavalli gets dicked down by boyfriend\'s son - Milf, Doggy, Pussy Porn', thumbnail: 'src/thumbnails/Watch Hot MILF Rachael Cavalli gets dicked down by boyfriend\'s son - Milf, Doggy, Pussy Porn.jpg' },
  { path: 'src/videos/Watch BLACKED Petite Blonde Baddies Kelly Collins And Nata Gold Share BBC - Bbc, Ffm, Blonde Porn.mp4', title: 'Watch BLACKED Petite Blonde Baddies Kelly Collins And Nata Gold Share BBC - Bbc, Ffm, Blonde Porn', thumbnail: 'src/thumbnails/Watch BLACKED Petite Blonde Baddies Kelly Collins And Nata Gold Share BBC - Bbc, Ffm, Blonde Porn.jpg' }
];

// --- END AUTO-GENERATED VIDEO ARRAY ---

const LOAD_BATCH = 24; // Number of items to load per batch

// Utility: Get file extension
function getExt(filename) {
  return filename.split('.').pop().toLowerCase();
}

// Utility: Get base name without extension
function getBaseName(filename) {
  // Handle both relative and absolute paths
  // First get the filename part (after the last slash)
  const filenameOnly = filename.substring(filename.lastIndexOf('/') + 1);
  // Then remove the extension (everything after the last dot)
  return filenameOnly.substring(0, filenameOnly.lastIndexOf('.'));
}

// Utility: Find Hero-bg image
function findHeroBg() {
  return images.find(
    m => /^hero-bg\./i.test(m.path.split('/').pop())
  );
}

function getImages() { return images; }
function getVideos() { return videos; }

// Utility: Create error overlay
function createErrorOverlay(message) {
  const overlay = document.createElement('div');
  overlay.className = 'media-error-overlay';
  overlay.textContent = message;
  return overlay;
}

// Utility: Find the best video file for a given base name
function findBestVideoFile(baseName) {
  // Always try to use mp4, then ts (let browser handle if not found)
  const mp4 = `src/videos/${baseName}.mp4`;
  // We'll prefer mp4 format, but could also try ts if needed
  return mp4;
}

// Utility: Find the thumbnail for a given base name
function findThumbnail(baseName) {
  // Always use the expected thumbnail path, let onerror handle fallback
  // First check if the thumbnail exists in the videos array

  // Look for an exact match in the videos array
  const matchingVideo = videos.find(v => {
    const videoBaseName = getBaseName(v.path);
    return videoBaseName === baseName;
  });

  if (matchingVideo && matchingVideo.thumbnail) {
    return matchingVideo.thumbnail;
  }

  // If no exact match was found, check if any thumbnail path matches the expected pattern
  const thumbnailExists = videos.some(v =>
    v.thumbnail === `src/thumbnails/${baseName}.jpg` ||
    v.path === `src/videos/${baseName}.mp4` ||
    v.path === `src/videos/${baseName}.ts`
  );

  if (thumbnailExists) {
    return `src/thumbnails/${baseName}.jpg`;
  } else {
    // Use a fallback image if the thumbnail doesn't exist
    return 'src/images/video-fallback.jpg';
  }
}

// Utility: Create image element with lazy loading and error handling
function createImageCard(img, className = 'card') {
  const div = document.createElement('div');
  div.className = className;
  const el = document.createElement('img');
  el.src = img.path;
  el.alt = img.caption || img.path;
  el.loading = 'lazy';
  el.onerror = () => {
    el.style.display = 'none';
    div.appendChild(createErrorOverlay('Image failed to load.'));
  };
  div.appendChild(el);
  return div;
}

// Utility: Create video card with error handling
function createVideoCard(video, className = 'card') {
  const div = document.createElement('div');
  div.className = className;

  // Check if video path is valid
  if (!video || !video.path) {
    console.warn('Invalid video object or missing path');
    div.appendChild(createErrorOverlay('Invalid video data'));
    return div;
  }

  const baseName = getBaseName(video.path);
  const img = document.createElement('img');

  // Use the thumbnail from the video object if available, otherwise try to find it
  // Check if the thumbnail exists before trying to load it
  const thumbnailPath = video.thumbnail || findThumbnail(baseName);

  // Use a fallback image if we're not sure the thumbnail exists
  if (!thumbnailPath || thumbnailPath.includes('video-fallback.jpg')) {
    img.src = 'src/images/video-fallback.jpg';
  } else {
    // Encode the thumbnail path to handle spaces and special characters
    img.src = encodeURI(thumbnailPath);
  }

  img.alt = video.title || video.path;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.loading = 'lazy';

  // Handle image loading errors
  img.onerror = () => {
    console.log(`Thumbnail failed to load: ${img.src}`);
    // Try to set fallback image if not already set
    if (!img.src.includes('video-fallback.jpg')) {
      img.src = 'src/images/video-fallback.jpg';
    } else {
      img.style.display = 'none';
      div.appendChild(createErrorOverlay('Thumbnail failed to load.'));
    }
  };

  const btn = document.createElement('button');
  btn.className = 'video-play-btn';
  btn.style.position = 'absolute';
  btn.style.top = '50%';
  btn.style.left = '50%';
  btn.style.transform = 'translate(-50%,-50%)';
  btn.style.background = 'rgba(0,0,0,0.7)';
  btn.style.border = 'none';
  btn.style.borderRadius = '50%';
  btn.style.width = '48px';
  btn.style.height = '48px';
  btn.style.fontSize = '2rem';
  btn.style.color = '#D4AF37';
  btn.style.cursor = 'pointer';
  btn.textContent = '▶';

  btn.onclick = (e) => {
    e.stopPropagation();
    if (video.path) {
      try {
        openVideoModal(video);
      } catch (error) {
        console.error('Error opening video modal:', error);
        alert('Could not play video. Please try again later.');
      }
    }
  };

  const rel = document.createElement('div');
  rel.style.position = 'relative';
  rel.style.width = '100%';
  rel.style.height = '100%';
  rel.appendChild(img);
  rel.appendChild(btn);
  div.appendChild(rel);

  const title = document.createElement('div');
  title.style.padding = '10px 0 0 0';
  title.style.fontWeight = 'bold';
  title.style.whiteSpace = 'normal'; // allow wrapping
  title.style.overflow = 'hidden';
  title.style.textOverflow = 'ellipsis';
  title.style.textAlign = 'center'; // center the title
  title.style.background = 'rgba(0,0,0,0.7)';
  title.style.color = '#fff';
  title.textContent = video.title || video.path;
  div.appendChild(title);

  div.onclick = () => {
    if (video.path) {
      try {
        openVideoModal(video);
      } catch (error) {
        console.error('Error opening video modal:', error);
        alert('Could not play video. Please try again later.');
      }
    }
  };

  return div;
}

// Hero background
function setHeroBg() {
  const hero = findHeroBg();
  if (hero) {
    document.body.style.backgroundImage = `url('${hero.path}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
}

// Infinite Scroll logic
function setupInfiniteScroll(container, items, renderFn) {
  let loaded = 0;
  let loading = false;
  function loadBatch() {
    if (loading) return;
    loading = true;
    const next = items.slice(loaded, loaded + LOAD_BATCH);
    next.forEach(item => container.appendChild(renderFn(item)));
    loaded += next.length;
    loading = false;
  }
  // Initial load
  loadBatch();
  // Scroll event
  window.addEventListener('scroll', () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      loaded < items.length
    ) {
      loadBatch();
    }
  });
}

// Photo Gallery
function renderPhotoGallery() {
  const container = document.getElementById('all-photos');
  if (!container) return;
  const imgs = getImages();
  setupInfiniteScroll(container, imgs, img => {
    const card = createImageCard(img);
    card.onclick = () => openSlideshow(imgs, imgs.indexOf(img));
    return card;
  });
}

// Video Gallery
function renderVideoGallery() {
  const container = document.getElementById('all-videos');
  if (!container) {
    console.warn('Video container not found');
    return;
  }

  try {
    // Get all videos from the database
    const allVideos = getVideos();

    if (!allVideos || !Array.isArray(allVideos)) {
      console.error('Invalid videos array:', allVideos);
      container.innerHTML = '<div class="no-content">Error loading videos</div>';
      return;
    }

    // Filter to only include video types with valid paths
    const validVideos = allVideos.filter(video => {
      // Check if the path is valid (not empty and is a string)
      if (!video || !video.path || typeof video.path !== 'string') {
        console.warn('Invalid video path:', video);
        return false;
      }

      // Check if the video exists in the videos array
      const videoExists = videos.some(v => v.path === video.path);
      if (!videoExists) {
        console.warn(`Video not found in database: ${video.path}`);
        return false;
      }

      return true;
    });

    if (validVideos.length === 0) {
      container.innerHTML = '<div class="no-content">No valid videos found</div>';
      return;
    }

    setupInfiniteScroll(container, validVideos, createVideoCard);
  } catch (error) {
    console.error('Error rendering video gallery:', error);
    container.innerHTML = '<div class="no-content">Error loading videos. Please try again later.</div>';
  }
}

// Featured Photos/Videos (index.html)
function renderFeatured() {
  const photosContainer = document.getElementById('featured-photos');
  const videosContainer = document.getElementById('featured-videos');

  // Handle featured photos
  if (photosContainer) {
    try {
      const images = getImages();
      if (!images || !Array.isArray(images) || images.length === 0) {
        photosContainer.innerHTML = '<div class="no-content">No photos available</div>';
      } else {
        const imgs = images.slice(0, 6);
        imgs.forEach(img => {
          if (img && img.path) {
            const card = createImageCard(img);
            card.onclick = () => openSlideshow(images, images.indexOf(img));
            photosContainer.appendChild(card);
          }
        });
      }
    } catch (error) {
      console.error('Error rendering featured photos:', error);
      photosContainer.innerHTML = '<div class="no-content">Error loading photos</div>';
    }
  }

  // Handle featured videos with validation
  if (videosContainer) {
    try {
      // Get all videos and filter out invalid ones
      const allVideos = getVideos();

      if (!allVideos || !Array.isArray(allVideos)) {
        console.error('Invalid videos array:', allVideos);
        videosContainer.innerHTML = '<div class="no-content">Error loading videos</div>';
        return;
      }

      const validVideos = allVideos.filter(video => {
        return video && video.path && typeof video.path === 'string' &&
               videos.some(v => v.path === video.path);
      });

      // Take up to 6 valid videos
      const vids = validVideos.slice(0, 6);

      if (vids.length === 0) {
        videosContainer.innerHTML = '<div class="no-content">No valid videos found</div>';
        return;
      }

      vids.forEach(video => {
        if (video && video.path) {
          videosContainer.appendChild(createVideoCard(video));
        }
      });
    } catch (error) {
      console.error('Error rendering featured videos:', error);
      videosContainer.innerHTML = '<div class="no-content">Error loading videos</div>';
    }
  }
}

// Slideshow Modal
function openSlideshow(images, idx) {
  const modal = document.getElementById('slideshow-modal');
  if (!modal) {
    console.error('Slideshow modal element not found');
    return;
  }

  const imgEl = document.getElementById('slideshow-img');
  const counter = document.getElementById('photo-counter');
  const caption = document.getElementById('photo-caption');
  const fullscreenBtn = document.getElementById('fullscreen-button');

  // Check if all required elements exist
  if (!imgEl || !counter || !caption || !fullscreenBtn) {
    console.error('One or more slideshow elements not found');
    return;
  }

  let current = idx;
  let startX = null;

  function show() {
    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = images[current].path;
      counter.textContent = `${current + 1} of ${images.length}`;
      caption.textContent = images[current].caption || images[current].path;
      imgEl.onload = () => { imgEl.style.opacity = 1; };
      modal.style.display = 'flex';
    }, 100);
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    show();
  }

  function next() {
    current = (current + 1) % images.length;
    show();
  }

  const prevBtn = document.getElementById('prev-photo');
  const nextBtn = document.getElementById('next-photo');
  const closeBtn = document.getElementById('close-slideshow');

  if (prevBtn) prevBtn.onclick = prev;
  if (nextBtn) nextBtn.onclick = next;
  if (closeBtn) closeBtn.onclick = () => (modal.style.display = 'none');

  if (fullscreenBtn) {
    fullscreenBtn.onclick = () => {
      if (imgEl.requestFullscreen) imgEl.requestFullscreen();
      else if (imgEl.webkitRequestFullscreen) imgEl.webkitRequestFullscreen();
      else if (imgEl.msRequestFullscreen) imgEl.msRequestFullscreen();
    };
  }

  // Keyboard navigation
  document.onkeydown = e => {
    if (modal.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Home') { current = 0; show(); }
    if (e.key === 'End') { current = images.length - 1; show(); }
    if (e.key === 'Escape') modal.style.display = 'none';
  };

  // Touch swipe support
  if (imgEl) {
    imgEl.ontouchstart = e => { startX = e.touches[0].clientX; };
    imgEl.ontouchend = e => {
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) prev();
      else if (startX - endX > 50) next();
      startX = null;
    };
  }

  show();
}

// Video Modal with captions and quality switch using our enhanced VideoPlayer
function openVideoModal(video) {
  const modal = document.getElementById('video-modal');
  if (!modal) {
    console.error('Video modal element not found');
    return;
  }

  const vidEl = document.getElementById('modal-video');
  const title = document.getElementById('video-title');
  const duration = document.getElementById('video-duration');
  const controls = document.querySelector('.video-controls');

  // Check if all required elements exist
  if (!vidEl || !title || !duration || !controls) {
    console.error('One or more video modal elements not found');
    return;
  }

  // Initialize our enhanced video player if not already done
  if (!window.enhancedPlayer) {
    window.enhancedPlayer = new VideoPlayer({
      videoElement: vidEl,
      autoplay: false,
      controls: true
    });
  }

  const videosArr = getVideos();
  let currentIdx = videosArr.findIndex(v => v.path === video.path);

  // Clear previous content
  vidEl.innerHTML = '';
  controls.innerHTML = '';

  // Show loading indicator
  const loadingMsg = document.createElement('div');
  loadingMsg.textContent = 'Loading video...';
  loadingMsg.style.padding = '20px';
  loadingMsg.style.textAlign = 'center';
  controls.appendChild(loadingMsg);

  // Get the base name for finding alternative formats
  const baseName = getBaseName(video.path);
  // Get the file extension
  const ext = getExt(video.path);

  // Prepare the video path
  let videoPath = video.path;
  if (videoPath.startsWith('/')) {
    videoPath = videoPath.substring(1);
  }

  // Encode the path to handle spaces and special characters
  const encodedPath = encodeURI(videoPath);

  // Use our enhanced video player to load the video
  window.enhancedPlayer.loadVideo(encodedPath, video.title || baseName, (errorMessage, fileExt) => {
    // Error callback - handle errors from the video player
    console.error('Video player error:', errorMessage);

    // Remove loading message
    controls.innerHTML = '';

    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.textContent = errorMessage;
    errorDiv.style.padding = '10px';
    errorDiv.style.margin = '10px auto';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.backgroundColor = 'rgba(255,0,0,0.2)';
    errorDiv.style.borderRadius = '5px';
    errorDiv.style.color = 'white';
    controls.appendChild(errorDiv);

    // Check if there's an MP4 version available as fallback
    if (fileExt === 'ts') {
      const mp4Path = `src/videos/${baseName}.mp4`;
      const mp4Exists = videos.some(v => v.path === mp4Path);

      if (mp4Exists) {
        const mp4Button = document.createElement('button');
        mp4Button.textContent = 'Try MP4 Version Instead';
        mp4Button.style.display = 'block';
        mp4Button.style.margin = '10px auto';
        mp4Button.style.padding = '10px 20px';
        mp4Button.style.backgroundColor = '#4CAF50';
        mp4Button.style.color = 'white';
        mp4Button.style.border = 'none';
        mp4Button.style.borderRadius = '5px';
        mp4Button.style.cursor = 'pointer';
        mp4Button.style.fontSize = '16px';
        mp4Button.style.fontWeight = 'bold';

        mp4Button.onclick = () => {
          const mp4Video = videos.find(v => v.path === mp4Path);
          if (mp4Video) {
            openVideoModal(mp4Video);
          }
        };

        controls.appendChild(mp4Button);
      }
    }

    // Add download button
    const downloadButton = document.createElement('a');
    downloadButton.href = encodedPath;
    downloadButton.download = baseName + '.' + ext;
    downloadButton.textContent = '⬇️ Download This Video ⬇️';
    downloadButton.style.display = 'block';
    downloadButton.style.margin = '15px auto';
    downloadButton.style.padding = '12px 25px';
    downloadButton.style.backgroundColor = '#D4AF37';
    downloadButton.style.color = 'black';
    downloadButton.style.textDecoration = 'none';
    downloadButton.style.borderRadius = '5px';
    downloadButton.style.fontWeight = 'bold';
    downloadButton.style.fontSize = '18px';
    downloadButton.style.textAlign = 'center';
    downloadButton.style.maxWidth = '300px';

    controls.appendChild(downloadButton);
  });

  // Remove loading message once video is loaded
  setTimeout(() => {
    if (controls.contains(loadingMsg)) {
      controls.removeChild(loadingMsg);
    }
  }, 1000);

  // For better compatibility, try to add alternative formats
  // Only add these as fallbacks, not as primary sources
  const formats = ['mp4', 'ts', 'webm'];

  // Check if the video exists in the videos array
  const videoExists = videos.some(v => v.path === video.path);

  if (!videoExists) {
    console.warn(`Video not found in database: ${video.path}`);
    // Remove loading message
    controls.innerHTML = '';
    controls.appendChild(createErrorOverlay('Video not found in the database.'));

    // Try to show a thumbnail instead
    if (video.thumbnail) {
      const fallbackImg = document.createElement('img');

      // Make sure the path is relative (remove leading slash if present)
      let thumbPath = video.thumbnail;
      if (thumbPath.startsWith('/')) {
        thumbPath = thumbPath.substring(1);
      }
      // Encode the thumbnail path to handle spaces and special characters
      fallbackImg.src = encodeURI(thumbPath);

      fallbackImg.alt = video.title || 'Video thumbnail';
      fallbackImg.style.maxWidth = '100%';
      fallbackImg.style.maxHeight = '400px';
      fallbackImg.style.display = 'block';
      fallbackImg.style.margin = '20px auto';
      fallbackImg.onerror = () => {
        fallbackImg.src = 'src/images/video-fallback.jpg';
      };
      controls.appendChild(fallbackImg);
    } else {
      // If no thumbnail, show fallback image
      const fallbackImg = document.createElement('img');
      fallbackImg.src = 'src/images/video-fallback.jpg';
      fallbackImg.alt = 'Video thumbnail';
      fallbackImg.style.maxWidth = '100%';
      fallbackImg.style.maxHeight = '400px';
      fallbackImg.style.display = 'block';
      fallbackImg.style.margin = '20px auto';
      controls.appendChild(fallbackImg);
    }
    return;
  }

  // Remove loading message once we know the video exists
  controls.innerHTML = '';

  // Add alternative formats as fallbacks
  formats.forEach(format => {
    // Skip the format that matches the original video
    if (format === ext) return;

    // Check if this format exists in the videos array
    const formatExists = videos.some(v =>
      v.path === `src/videos/${baseName}.${format}`
    );

    if (formatExists) {
      // Ensure path is relative (no leading slash)
      const formatPath = `src/videos/${baseName}.${format}`;
      const encodedFormatPath = encodeURI(formatPath);

      // If this is a .ts format, add multiple MIME types
      if (format === 'ts') {
        tsMimeTypes.forEach(mimeType => {
          const source = document.createElement('source');
          source.src = encodedFormatPath;
          source.type = mimeType;
          vidEl.appendChild(source);
        });
        console.log(`Added alternative format with multiple MIME types: ${formatPath}`);
      } else {
        // For other formats, just use the standard MIME type
        const formatSrc = document.createElement('source');
        formatSrc.src = encodedFormatPath;
        formatSrc.type = mimeTypes[format];
        vidEl.appendChild(formatSrc);
        console.log(`Added alternative format: ${formatPath}`);
      }
    }
  });

  // Captions (if .vtt file with same base name exists in videos array)
  const caption = videos.find(m => m.type === 'caption' && m.path.split('/').pop().startsWith(baseName));
  if (caption) {
    const track = document.createElement('track');
    track.kind = 'subtitles';
    track.label = 'English';
    track.srclang = 'en';

    // Make sure the path is relative (remove leading slash if present)
    let captionPath = caption.path;
    if (captionPath.startsWith('/')) {
      captionPath = captionPath.substring(1);
    }
    // Encode the caption path to handle spaces and special characters
    track.src = encodeURI(captionPath);

    track.default = true;
    vidEl.appendChild(track);
    console.log(`Added caption track: ${track.src}`);
  }

  // Load the video with the sources we've added
  vidEl.load();
  title.textContent = video.title || video.path;

  // Add a direct fallback mechanism - if the video doesn't start loading within 3 seconds,
  // try setting the src attribute directly on the video element
  setTimeout(() => {
    if (vidEl.readyState === 0) { // HAVE_NOTHING - no data available
      console.log('Video not loading with source elements, trying direct src attribute');
      // Clear existing sources
      while (vidEl.firstChild) {
        if (vidEl.firstChild.tagName === 'SOURCE') {
          vidEl.removeChild(vidEl.firstChild);
        } else {
          break;
        }
      }

      // Set src directly on video element
      vidEl.src = encodeURI(videoPath);
      vidEl.load();
      vidEl.play().catch(e => console.log('Error playing video:', e));
    }
  }, 3000);

  // Show duration and current time
  vidEl.ontimeupdate = () => {
    duration.textContent = `${formatTime(vidEl.currentTime)} / ${formatTime(vidEl.duration)}`;
  };

  vidEl.onloadedmetadata = () => {
    duration.textContent = `${formatTime(vidEl.currentTime)} / ${formatTime(vidEl.duration)}`;
  };

  // Add format-specific information and controls
  if (ext === 'ts') {
    // Add a message about .ts file compatibility
    const tsNote = document.createElement('div');
    tsNote.textContent = 'Note: This video is in .ts format. Our enhanced player will attempt to play it using the best available method for your browser.';
    tsNote.style.backgroundColor = 'rgba(0,255,0,0.2)';
    tsNote.style.padding = '10px';
    tsNote.style.marginTop = '10px';
    tsNote.style.borderRadius = '5px';
    controls.appendChild(tsNote);

    // Add a play button
    const playButton = document.createElement('button');
    playButton.textContent = 'Click to Play Video';
    playButton.style.display = 'block';
    playButton.style.margin = '10px auto';
    playButton.style.padding = '10px 20px';
    playButton.style.backgroundColor = '#D4AF37';
    playButton.style.color = 'black';
    playButton.style.border = 'none';
    playButton.style.borderRadius = '5px';
    playButton.style.cursor = 'pointer';
    playButton.style.fontSize = '16px';
    playButton.style.fontWeight = 'bold';

    playButton.onclick = () => {
      window.enhancedPlayer.play();
    };

    controls.appendChild(playButton);

    // Add a download link as a fallback option
    const downloadContainer = document.createElement('div');
    downloadContainer.style.textAlign = 'center';
    downloadContainer.style.margin = '15px auto';
    downloadContainer.style.padding = '10px';
    downloadContainer.style.backgroundColor = 'rgba(0,0,0,0.2)';
    downloadContainer.style.borderRadius = '5px';

    const downloadText = document.createElement('p');
    downloadText.textContent = 'If streaming doesn\'t work, download the video:';
    downloadText.style.margin = '0 0 10px 0';
    downloadText.style.color = 'white';

    const downloadLink = document.createElement('a');
    downloadLink.href = encodedPath;
    downloadLink.download = baseName + '.' + ext;
    downloadLink.textContent = 'Download Video to Play Locally';
    downloadLink.style.display = 'inline-block';
    downloadLink.style.padding = '8px 15px';
    downloadLink.style.backgroundColor = '#D4AF37';
    downloadLink.style.color = 'black';
    downloadLink.style.textDecoration = 'none';
    downloadLink.style.borderRadius = '5px';
    downloadLink.style.fontWeight = 'bold';

    downloadContainer.appendChild(downloadText);
    downloadContainer.appendChild(downloadLink);
    controls.appendChild(downloadContainer);

    // Check if MP4 version exists and offer it as an alternative
    const mp4Path = `src/videos/${baseName}.mp4`;
    const mp4Exists = videos.some(v => v.path === mp4Path);

    if (mp4Exists) {
      const mp4Option = document.createElement('div');
      mp4Option.style.textAlign = 'center';
      mp4Option.style.margin = '10px auto';

      const mp4Link = document.createElement('button');
      mp4Link.textContent = 'Try MP4 Version Instead';
      mp4Link.style.padding = '8px 15px';
      mp4Link.style.backgroundColor = '#4CAF50';
      mp4Link.style.color = 'white';
      mp4Link.style.border = 'none';
      mp4Link.style.borderRadius = '5px';
      mp4Link.style.cursor = 'pointer';

      mp4Link.onclick = () => {
        // Find the MP4 version in the videos array
        const mp4Video = videos.find(v => v.path === mp4Path);
        if (mp4Video) {
          openVideoModal(mp4Video);
        }
      };

      mp4Option.appendChild(mp4Link);
      controls.appendChild(mp4Option);
    }
  } else if (ext === 'mkv' || ext === 'avi' || ext === 'wmv') {
    // Add a message about less-supported formats
    const formatNote = document.createElement('div');
    formatNote.textContent = `Note: This video is in ${ext.toUpperCase()} format, which may have limited browser support. Our enhanced player will attempt to play it, but you may need to download it for local playback.`;
    formatNote.style.backgroundColor = 'rgba(255,255,0,0.2)';
    formatNote.style.padding = '10px';
    formatNote.style.marginTop = '10px';
    formatNote.style.borderRadius = '5px';
    controls.appendChild(formatNote);

    // Add a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = encodedPath;
    downloadLink.download = baseName + '.' + ext;
    downloadLink.textContent = 'Download Video to Play Locally';
    downloadLink.style.display = 'block';
    downloadLink.style.margin = '10px auto';
    downloadLink.style.padding = '8px 15px';
    downloadLink.style.backgroundColor = '#D4AF37';
    downloadLink.style.color = 'black';
    downloadLink.style.textDecoration = 'none';
    downloadLink.style.borderRadius = '5px';
    downloadLink.style.fontWeight = 'bold';
    downloadLink.style.textAlign = 'center';
    downloadLink.style.maxWidth = '250px';

    controls.appendChild(downloadLink);
  }

  // Comprehensive error handling
  vidEl.onerror = (e) => {
    console.log('Video error:', e);
    // Clear any previous error messages
    const existingErrors = controls.querySelectorAll('.media-error-overlay');
    existingErrors.forEach(el => el.remove());

    // Get detailed error information
    let errorMsg = 'Video failed to load. ';

    if (vidEl.error) {
      console.error('Video error code:', vidEl.error.code);
      switch (vidEl.error.code) {
        case 1:
          errorMsg += 'The video playback was aborted.';
          break;
        case 2:
          errorMsg += 'A network error occurred. Check your internet connection.';
          break;
        case 3:
          errorMsg += 'The video format is not supported by your browser.';
          break;
        case 4:
          errorMsg += 'The video file was not found or is in an unsupported format.';
          break;
        default:
          if (ext === 'ts') {
            errorMsg += 'This .ts file format may not be supported by your browser. Try using Chrome or Edge, or check if the file exists.';
          } else {
            errorMsg += 'The file may not exist or may be in an unsupported format.';
          }
      }
    } else {
      if (ext === 'ts') {
        errorMsg += 'This .ts file format may not be supported by your browser. Try using Chrome or Edge, or check if the file exists.';
      } else {
        errorMsg += 'The file may not exist or may be in an unsupported format.';
      }
    }

    // Create a more detailed error overlay
    const errorOverlay = document.createElement('div');
    errorOverlay.className = 'media-error-overlay';
    errorOverlay.style.position = 'absolute';
    errorOverlay.style.top = '0';
    errorOverlay.style.left = '0';
    errorOverlay.style.width = '100%';
    errorOverlay.style.height = '100%';
    errorOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    errorOverlay.style.color = 'white';
    errorOverlay.style.display = 'flex';
    errorOverlay.style.flexDirection = 'column';
    errorOverlay.style.justifyContent = 'center';
    errorOverlay.style.alignItems = 'center';
    errorOverlay.style.padding = '20px';
    errorOverlay.style.textAlign = 'center';
    errorOverlay.style.zIndex = '10';

    // Error message
    const errorText = document.createElement('div');
    errorText.textContent = errorMsg;
    errorText.style.fontSize = '16px';
    errorText.style.marginBottom = '20px';
    errorOverlay.appendChild(errorText);

    // Add download button
    const downloadBtn = document.createElement('a');
    downloadBtn.href = encodeURI(videoPath);
    downloadBtn.download = '';
    downloadBtn.textContent = '⬇️ Download Video';
    downloadBtn.style.padding = '10px 20px';
    downloadBtn.style.backgroundColor = '#D4AF37';
    downloadBtn.style.color = 'black';
    downloadBtn.style.textDecoration = 'none';
    downloadBtn.style.borderRadius = '5px';
    downloadBtn.style.fontWeight = 'bold';
    downloadBtn.style.margin = '10px 0';
    errorOverlay.appendChild(downloadBtn);

    // Add retry button
    const retryBtn = document.createElement('button');
    retryBtn.textContent = '🔄 Retry';
    retryBtn.style.padding = '10px 20px';
    retryBtn.style.backgroundColor = '#4CAF50';
    retryBtn.style.color = 'white';
    retryBtn.style.border = 'none';
    retryBtn.style.borderRadius = '5px';
    retryBtn.style.cursor = 'pointer';
    retryBtn.style.margin = '10px 0';
    retryBtn.onclick = function() {
      // Remove error overlay
      if (errorOverlay.parentNode) {
        errorOverlay.parentNode.removeChild(errorOverlay);
      }

      // Reload video
      vidEl.load();
      vidEl.play().catch(e => console.error('Error playing video after retry:', e));
    };
    errorOverlay.appendChild(retryBtn);

    // Add to video container
    controls.appendChild(errorOverlay);

    // Try to show a thumbnail instead
    if (video.thumbnail) {
      const fallbackImg = document.createElement('img');

      // Make sure the path is relative (remove leading slash if present)
      let thumbPath = video.thumbnail;
      if (thumbPath.startsWith('/')) {
        thumbPath = thumbPath.substring(1);
      }
      // Encode the thumbnail path to handle spaces and special characters
      fallbackImg.src = encodeURI(thumbPath);

      fallbackImg.alt = video.title || 'Video thumbnail';
      fallbackImg.style.maxWidth = '100%';
      fallbackImg.style.maxHeight = '400px';
      fallbackImg.style.display = 'block';
      fallbackImg.style.margin = '20px auto';
      fallbackImg.onerror = () => {
        fallbackImg.src = 'src/images/video-fallback.jpg';
      };
      controls.appendChild(fallbackImg);
    } else {
      // If no thumbnail, show fallback image
      const fallbackImg = document.createElement('img');
      fallbackImg.src = 'src/images/video-fallback.jpg';
      fallbackImg.alt = 'Video thumbnail';
      fallbackImg.style.maxWidth = '100%';
      fallbackImg.style.maxHeight = '400px';
      fallbackImg.style.display = 'block';
      fallbackImg.style.margin = '20px auto';
      controls.appendChild(fallbackImg);
    }
  };

  // Fullscreen button
  const fullscreenBtn = document.getElementById('video-fullscreen');
  if (fullscreenBtn) {
    fullscreenBtn.onclick = () => {
      if (vidEl.requestFullscreen) vidEl.requestFullscreen();
      else if (vidEl.webkitRequestFullscreen) vidEl.webkitRequestFullscreen();
      else if (vidEl.msRequestFullscreen) vidEl.msRequestFullscreen();
    };
  }

  // Playback speed control
  const speedSelect = document.createElement('select');
  [0.5, 1, 1.25, 1.5, 2].forEach(spd => {
    const opt = document.createElement('option');
    opt.value = spd;
    opt.textContent = `${spd}x`;
    if (spd === 1) opt.selected = true;
    speedSelect.appendChild(opt);
  });
  speedSelect.onchange = () => { vidEl.playbackRate = parseFloat(speedSelect.value); };
  controls.appendChild(speedSelect);

  // Volume control
  const volumeInput = document.createElement('input');
  volumeInput.type = 'range';
  volumeInput.min = 0;
  volumeInput.max = 1;
  volumeInput.step = 0.01;
  volumeInput.value = vidEl.volume;
  volumeInput.oninput = () => { vidEl.volume = volumeInput.value; };
  controls.appendChild(volumeInput);

  // Next/Prev video navigation
  const prevVideoBtn = document.getElementById('prev-video');
  const nextVideoBtn = document.getElementById('next-video');

  if (prevVideoBtn) {
    prevVideoBtn.onclick = () => {
      openVideoModal(videosArr[(currentIdx - 1 + videosArr.length) % videosArr.length]);
    };
  }

  if (nextVideoBtn) {
    nextVideoBtn.onclick = () => {
      openVideoModal(videosArr[(currentIdx + 1) % videosArr.length]);
    };
  }

  // Keyboard navigation
  document.onkeydown = e => {
    if (modal.style.display !== 'flex') return;
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      vidEl.pause();
    }
    if (e.key === 'ArrowLeft' && prevVideoBtn) {
      openVideoModal(videosArr[(currentIdx - 1 + videosArr.length) % videosArr.length]);
    }
    if (e.key === 'ArrowRight' && nextVideoBtn) {
      openVideoModal(videosArr[(currentIdx + 1) % videosArr.length]);
    }
  };

  modal.style.display = 'flex';

  const closeVideoBtn = document.getElementById('close-video');
  if (closeVideoBtn) {
    closeVideoBtn.onclick = () => {
      modal.style.display = 'none';

      // Pause the video
      if (window.enhancedPlayer) {
        window.enhancedPlayer.pause();
      } else {
        vidEl.pause();
      }

      // Clean up resources
      if (window.enhancedPlayer) {
        try {
          // We don't destroy the player instance, just clean up resources
          // This allows us to reuse the player for the next video
          window.enhancedPlayer.clearSources();
        } catch (e) {
          console.error('Error cleaning up video player:', e);
        }
      }
    };
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '--:--';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Main loader
function loadAndRender() {
  try {
    setHeroBg();
    renderFeatured();
    renderPhotoGallery();
    renderVideoGallery();

    // Log success message
    console.log('Page loaded successfully');
  } catch (error) {
    console.error('Error loading page:', error);
    // Display a user-friendly error message if needed
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.padding = '20px';
    errorDiv.style.margin = '20px auto';
    errorDiv.style.maxWidth = '600px';
    errorDiv.style.backgroundColor = 'rgba(255,0,0,0.1)';
    errorDiv.style.border = '1px solid red';
    errorDiv.style.borderRadius = '5px';
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = 'center';
    errorDiv.textContent = 'There was an error loading the page. Please refresh or try again later.';

    // Insert at the top of the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.insertBefore(errorDiv, mainContent.firstChild);
    } else {
      document.body.insertBefore(errorDiv, document.body.firstChild);
    }
  }
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadAndRender);