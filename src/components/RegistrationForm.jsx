import { useState } from "react";

export default function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ name, email, password }); }}>
      <label>
        名前
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        メール
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        パスワード
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">登録</button>
    </form>
  );
}
