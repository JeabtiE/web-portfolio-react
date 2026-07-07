# My Portfolio (React + Vite version)

แปลงจากโปรเจกต์เดิม [Basiccom_Lab03](https://github.com/JeabtiE/Basiccom_Lab03) (static HTML/CSS)
มาเป็น **React + Vite** โดยใช้ **React Router** สำหรับ routing ระหว่างหน้า `/` และ `/about`

## โครงสร้างโปรเจกต์

```
portfolio-react/
├── index.html              entry HTML ของ Vite (มีแค่ <div id="root">)
├── vite.config.js
├── package.json
├── public/img/              (ต้องนำรูปตัวเดิมมาใส่ - ดูด้านล่าง)
└── src/
    ├── main.jsx             จุดเริ่มต้น React + BrowserRouter
    ├── App.jsx              กำหนด Routes: "/" -> Home, "/about" -> About
    ├── index.css            (ต้องนำ style.css ตัวเดิมมาใส่ - ดูด้านล่าง)
    ├── data/
    │   ├── projects.js       ข้อมูลการ์ด Portfolio ทั้งหมด (map เป็น <ProjectCard />)
    │   └── contacts.js       ข้อมูลลิงก์ติดต่อ
    ├── components/
    │   ├── Navbar.jsx        navbar ที่ใช้ทุกหน้า (คลิก Portfolio/Contact จากหน้า About จะพากลับไป "/" แล้วเลื่อนลง section)
    │   ├── Footer.jsx
    │   └── ProjectCard.jsx   การ์ดโปรเจกต์แต่ละใบ มีปุ่ม "Read more" toggle ด้วย useState
    └── pages/
        ├── Home.jsx          หน้าแรก (Hero, About preview, Portfolio, Contact)
        └── About.jsx         หน้า About แบบเต็ม
```

## สิ่งที่ต้องทำก่อนรัน (สำคัญ)

โค้ดนี้ยัง**ไม่มี** `style.css` และรูปภาพจริงของคุณ:
1. คัดลอกเนื้อหาไฟล์ `style.css` ตัวเดิม (จาก repo `Basiccom_Lab03`) มาแปะทับใน `src/index.css`
2. คัดลอกโฟลเดอร์ `img/` ทั้งหมดจาก repo เดิม มาวางใน `public/img/`
   (ไฟล์ใน `public/` ของ Vite จะถูก serve ที่ root path ตรง ๆ เช่น `public/img/cmu.png` → `/img/cmu.png`
   ซึ่งตรงกับ path ที่ผมอ้างอิงไว้ใน `.jsx` แล้ว ไม่ต้องแก้ path)

## วิธีรันใน VS Code

```bash
npm install
npm run dev
```

Vite จะเปิด dev server พร้อม HMR (แก้โค้ดแล้วเห็นผลใน browser ทันทีไม่ต้อง refresh) ที่ `http://localhost:5173`

Build สำหรับ production:
```bash
npm run build
npm run preview
```

## จุดที่ต่างจากตอนเป็น static HTML

| เดิม (Static HTML) | ใหม่ (React + Vite) |
|---|---|
| `index.html`, `about.html` แยกไฟล์ | Component เดียวกัน (`Navbar`, `Footer`) render ผ่าน `<Routes>` ของ react-router-dom ไม่ใช่ไฟล์แยก |
| การ์ด Portfolio เขียน HTML ซ้ำ 6 ใบ | `data/projects.js` + `<ProjectCard />` component, map render |
| "Read more" ใช้ checkbox/label CSS-only hack | ใช้ `useState` ธรรมดาใน `ProjectCard.jsx` เพราะตอนนี้มี JS ให้ใช้เต็มที่ |
| ลิงก์ nav ไป `about.html#portfolio` | ใช้ `<Link>` + scroll-to-hash effect ใน `Home.jsx` (คลิกจากหน้า About จะพากลับหน้าแรกแล้วเลื่อนลง section ให้เอง) |
| ไม่มี build step | มี Vite dev server (HMR) และ `vite build` สำหรับ production |

หน้าตาและ Bootstrap classes ทั้งหมดยังเหมือนเดิม 100% เปลี่ยนแค่วิธีเขียนโค้ด (component-based) และเครื่องมือ (Vite) เท่านั้น
