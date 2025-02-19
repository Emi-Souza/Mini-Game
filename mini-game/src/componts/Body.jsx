import './Body.css'
import { useState } from "react";

export default function EmojiSorteio() {
  const emojis = ["😀", "😂", "😍", "🤩", "😎", "🔥", "🎉", "💖", "🤯", "👻"]
  const [emojiSorteado, setEmojiSorteado] = useState("❓")

  function sortearEmoji() {
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)]
    setEmojiSorteado(emojiAleatorio);
  }

  function limparEmoji() {
    setEmojiSorteado("❓")
  }

  return (
    <div className="container-body">
      <h1>🎰 Sorteie seu Emoji 🎰</h1>
      <div className='container-emoji'>
        <div className="emoji">{emojiSorteado}</div>
        <div className='container-emoji'></div>
        <button onClick={sortearEmoji} className="botão">Sortear 🎲</button>
        <button onClick={limparEmoji} className="limpar">Limpar ❌</button>
      </div>
    </div>
  )
}
