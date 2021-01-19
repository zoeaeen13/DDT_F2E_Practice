## 數數發中心 前端筆試題
一個串接 Lidemy API 的部落格系統，註冊用戶可以檢視、上傳、編輯及刪除文章。
- [Demo](https://zoeaeen13.github.io/DDT_F2E_Practice/)



### 完成項目
- 進入畫面時，從假 API 取得取得資訊後，渲染 UI
- 依照 status 分類 `進行中` 與 `已完成`

### **功能**
- 因應畫面，依據 `status.code` 分類為「進行中」與「已完成」
- 按照 Sort Date By DESC 要求，自行轉換時間，以 Array.sort() 進行排序

```
// Date converter to TimeStamp
export function transferDate(taiwanDate) {
  let dateArr = taiwanDate.split("/");
  let year = Number(dateArr[0]);
  let month = Number(dateArr[1]);
  let date = Number(dateArr[2]);

  if (month <= 9) month = "0" + month;
  if (date <= 9) date = "0" + date;
  dateArr[0] = year + 1911;
  dateArr[1] = month;
  dateArr[2] = date;

  return Date.parse(dateArr.join("-"));
}
```


### 使用技術
- 以 React 框架建構
- 以 JSX 語法撰寫元件
- 支援 RWD，使用 styled-components 以 SCSS 語法調整排版
- 使用 funciton component 及 hooks
- 導入 Prettier 讓程式碼格式統一
- 組織 React app 檔案結構

### 檔案結構
- /src
    - /components
        - App.js
        - List.js
    - /constants
        - style.js
    - index.css
    - index.js
    - utills.js: All Utility functions
    - WebAPI.js: Integrate to call API

