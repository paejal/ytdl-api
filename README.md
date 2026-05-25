## ytdl-api

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?style=flat-square&logo=express&logoColor=white)
![License](https://img.shields.io/github/license/paejal/ytdl-api?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)


REST API to download `.mp3` and `.mp4` files.

#### `GET` Video Info

**endpoint:** `BaseURL/info/?url=value`

| Query     | Type   | Mandatory | Description      |
| --------- | ------ | --------- | ---------------- |
| `url`     | string | required  | youtube url link |

**Response:**

```json
{
    "title": "Video title",
    "thumbnail": "Video thumbnail url"
}
```


#### `GET` Download `mp3` file

**endpoint:** `BaseURL/mp3/?url=value&quality=value`

| Query     | Type   | Mandatory | Description      |
| --------- | ------ | --------- | ---------------- |
| `url`     | string | required  | youtube url link |
| `quality` | string | optional  | by default 128    |

**Response:**

```json
{
    "status": true,
    "quality": "quality",
    "availableQuality": [ 92, 128, 256 ],
    "url": "url mp3",
    "filename": "filename"
}
```

#### `GET` Download `mp4` file

**endpoint:** `BaseURL/mp4/?url=value&quality=value`

| Query     | Type   | Mandatory | Description      |
| --------- | ------ | --------- | ---------------- |
| `url`     | string | required  | youtube url link |
| `quality` | string | optional  | by default 360    |

**Response:**

```json
{
    "status": true,
    "quality": "quality",
    "availableQuality": [ 240, 360, 480 ],
    "url": "url mp4",
    "filename": "filename"
}
```

