# Bingo
###### *version-V1.0.2* 
[[English](https://github.com/jx06T/bingo/blob/master/README.en.md)]


---

## 展示地址
- [Bingo](https://bingo-jx.vercel.app/)

## 設定
- 點擊右上角按鈕可開啟設定
![設定](https://i.imgur.com/mxQTtrp.png)
- `grid` > 排列方式
  - `auto` > 自動
  - `fixed` > 固定 5 ✕ 5
- `size` > 卡片是否全部可見
  - `full` > 縮小卡片使全部卡片可見
  - `max` > 使卡片大小最大
- `aspectRatio` > 圖片長寬比
- `Reassign numbers` > 重新對應圖片與數字

## 卡片效果
![卡片](https://i.imgur.com/Zj6rIzi.png)


## 卡片資料格式（用於自行部署）
``` JSON
{
    "title": "<標題>:string",
    "subtitle": "<副標題>:string（不顯示）",
    "cards": [
        {
            "id": "<唯一 id>:int （隨便填不重複就好）",
            "imgPath": "<圖片路徑>:string（可填寫本地項目路徑或線上圖片網址）",
            "name": "<物品名稱>:string（可使用 '\n' 強制標題換行）",
            "describe": {
                "ch": "<中文介紹>: string | undefined",
                "jp": "<日文介紹>: string | undefined",
                "en":"<英文介紹> : string | undefined (新增別的語言可以直接新增一個鍵)"
            }
        }
     ]
}
```
## 更新

### 1.0
```
1.0.2
設定卡片資料
修改樣式
更新 README.md

1.0.1
修改樣式
完成卡片互動邏輯
動畫

1.0.0
卡片基礎布局
設定邏輯
```
