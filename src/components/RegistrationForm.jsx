import { useState } from "react";

export default function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // ここで簡易チェック（onSubmit 呼び出し前）
    if (password.length < 6) {
      setError("パスワードは6文字以上にしてください");
      return;
    }

    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError(""); // 編集時にエラーをクリア
          }}
        />
      </label>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button type="submit">登録</button>
    </form>
  );
}