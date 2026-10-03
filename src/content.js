// src/content.js
const content = {
  music: "/path-to-your-music.mp3", 
  
  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `هاي عموري القموري 
بحبك أوي أوي أنت أكتر حاجه أنا بحبها في الدُنيا عُمري ما حبيت في حياتي حاجه قد ما بحبك وعُمري ما أتمنيت من ربنا حاجه قد ما بتمني أنك تفضل في حضني دايماً
عيشت معاك حاجات أول مره أعيشها وعملت معاك حاجات عُمري ما عملتها مع حد غيرك وحسيت معاك حاجات أول مره أحسها في حياتي 
عرفت يعني أي حُب يعني أي أمان يعني أي حنيه يعني أي حُضن أجري عليه يعني أي ملجأ ليا في أي وقت أحتاجه بقيت حاسه ليا بيت وليا مكان أروحله وقت ما أحب
أنا بقيت عايشه علشانك بصحي كل يوم متحمسه لليوم معاك 
بحبك أوي وبحب حُبك ليا بحبك حُضنك ليا بحب كُل حاجه فيك
بصتك ريحتك حضنك جنانك عيونك حتي جنانك وعصبيتك اللي دايماً بقولك عليهم لا بحبهم برضو بحبك وأنت حتي مضايق وشايل طاجن ستك ياعمورة قلبي 
أنت حبيبي وصاحبي وزوجي وأبني وحته من قلبي وأغلي حاجه في حياتي بحبك ياديب🌏❤️
ربنا يحفظك ليا ويخليك ليا وميحرمنيش من حضنك وريحتك وصوتك وحنيتك ويباركلي فيك ويبعد عنك أي حاجه وحشه أو تأذيك أنت مش مُتخيل أنا بحبك قد أي والله حبيبي ياعموريييييي😭❤❤❤`,

    signoff: "your love",
    signature: "yours always ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg",  label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
      { src: "/images/placeholder-7.jpg",  label: "" },
      { src: "/images/placeholder-8.jpg",  label: "" },
      { src: "/images/placeholder-9.jpg",  label: "" },
      { src: "/images/placeholder-10.jpg",  label: "" },
      { src: "/images/placeholder-11.jpg",  label: "" },
      { src: "/images/placeholder-12.jpg",  label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4", 
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;