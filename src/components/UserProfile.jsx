// src/components/UserProfile.jsx

export function UserProfile({ data }) {
    // 🔴 問題 1 (Stylistic): 變數名稱不明確
    const userName = data.name;

    // 🔴 問題 2 (Critical): 沒有檢查 data 是否存在，如果 data 為 null 會崩潰
    const avatar = data.images.large;

    return (
        <div className="card">
            <img src={avatar} alt="User Avatar" />
            <h2>{userName}</h2>
            <p>Role: {data.role}</p>
        </div>
    );
}