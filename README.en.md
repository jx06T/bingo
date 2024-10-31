# Bingo
###### *version-V1.0.2*　
[[Chinese](https://github.com/jx06T/bingo)]

---

## Demo
- [Bingo](https://bingo-jx.vercel.app/)

## Settings
- Click the button in the top right corner to open settings.
![Settings](https://i.imgur.com/mxQTtrp.png)
- `grid` > Arrangement:
  - `auto` > Automatic
  - `fixed` > Fixed 5x5
- `size` > Show all cards:
  - `full` > Shrinks the cards to display all cards on screen
  - `max` > Maximizes card size
- `aspectRatio` > Image aspect ratio
- `Reassign numbers` > Reassigns images and numbers

## Card Effects
![Card](https://i.imgur.com/Zj6rIzi.png)

## Card Data Format (for self-deployment)
```json
{
    "title": "<Title>:string",
    "subtitle": "<Subtitle>:string (not displayed)",
    "cards": [
        {
            "id": "<Unique ID>:int (any integer)",
            "imgPath": "<Image Path>:string (local project path or online image URL)",
            "name": "<Item Name>:string (can use '\n' for forced line breaks)",
            "describe": {
                "ch": "<Description in Chinese>: string | undefined",
                "jp": "<Description in Japanese>: string | undefined",
                "en":"<Description in English>: string | undefined (to add another language, simply add a new key)"
            }
        }
     ]
}

```

## Updates

### 1.0
```
1.0.2
Added card data
Updated styles
Modified README.md

1.0.1
Updated styles
Completed card interaction logic
Animations

1.0.0
Basic card layout
Settings logic

```