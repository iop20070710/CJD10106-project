document.addEventListener('DOMContentLoaded', () => {
  const nameBox = document.getElementById('character-name');
  const imageEl = document.getElementById('character-image');
  const descBoxes = document.querySelectorAll('.character-description');
  const quoteBox = document.getElementById('character-quote');
  const videoElement = document.getElementById('character-video');

  // 點擊頭像切換角色
  document.querySelectorAll('.character-heads img').forEach(img => {
    img.addEventListener('click', () => {
      const key = img.dataset.character;
      const character = characters[key];
      if (!character) return;

      // 名稱更新
      nameBox.innerHTML = `
        <span class="character-name-chinese">${character.nameChinese}</span>
        <span class="character-name-english">${character.nameEnglish}</span>
      `;

      // ✅ 圖片根據螢幕寬度切換
      const isMobile = window.innerWidth <= 768;
      imageEl.src = isMobile ? character.imageMobile : character.image;

      // 描述文字（兩個 box 同步更新）
      descBoxes.forEach(box => {
        box.innerHTML = character.description;
      });

      // quote（桌機顯示）
      if (quoteBox) {
        quoteBox.innerHTML = character.quote;
      }

      // 影片（可選）
      if (videoElement && character.video) {
        videoElement.src = character.video;
        videoElement.load();
        videoElement.play();
      }
    });
  });

  // 預設載入冒險團
  document.querySelectorAll('.adventure-team').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTeam = btn.dataset.team;

      document.querySelectorAll('.character-heads img').forEach(img => {
        img.style.display = (img.dataset.team === selectedTeam) ? 'inline-block' : 'none';
      });

      const first = document.querySelector(`.character-heads img[data-team="${selectedTeam}"]`);
      if (first) first.click();
    });
  });

  // 預設載入第一個團
  document.querySelector(`.adventure-team[data-team="pinway"]`)?.click();
});
