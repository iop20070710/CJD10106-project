document.addEventListener('DOMContentLoaded', () => {
  const nameBox = document.getElementById('character-name');
  const descBox = document.getElementById('character-description');
  const imgBox = document.getElementById('character-image');
  const quoteBox = document.getElementById('character-quote');
  const videoElement = document.getElementById('character-video');

document.querySelectorAll('.character-heads img').forEach(img => {
  img.addEventListener('click', () => {
    const key = img.dataset.character;
    const char = characters[key];

    if (char) {
      nameBox.innerHTML = `
        <span class="character-name-chinese">${char.nameChinese}</span>
        <span class="character-name-english">${char.nameEnglish}</span>
      `;
      descBox.innerHTML = char.description;
      imgBox.src = char.image;
      quoteBox.innerHTML = char.quote;

      if (char.video) {
        videoElement.src = char.video;
        videoElement.load(); // 重新載入新影片
        videoElement.play(); // 自動播放
      }
    }
  });
});

  // 點角色頭像時顯示內容
  document.querySelectorAll('.character-heads img').forEach(img => {
    img.addEventListener('click', () => {
      const key = img.dataset.character;
      const char = characters[key];

      if (char) {
        nameBox.innerHTML = `
          <span class="character-name-chinese">${char.nameChinese}</span>
          <span class="character-name-english">${char.nameEnglish}</span>
        `;
        descBox.innerHTML = char.description;
        imgBox.src = char.image;
        quoteBox.innerHTML = char.quote;

        if (char.video) {
          videoFrame.src = char.video;
        }
      }
    });
  });

  // 冒險團按鈕切換角色群組
  document.querySelectorAll('.adventure-team').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTeam = btn.dataset.team;

      document.querySelectorAll('.character-heads img').forEach(img => {
        img.style.display = (img.dataset.team === selectedTeam) ? 'inline-block' : 'none';
      });

      // 自動顯示該團第一位角色
      const firstCharacter = document.querySelector(`.character-heads img[data-team="${selectedTeam}"]`);
      if (firstCharacter) firstCharacter.click();
    });
  });

  // 預設載入蘋薇冒險團
  const defaultTeam = 'pinway';
  document.querySelector(`.adventure-team[data-team="${defaultTeam}"]`)?.click();
});