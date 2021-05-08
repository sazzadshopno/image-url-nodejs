# Fetch Blog

Used to get all the blogs available in database.

**URL** : `/api/blog/`

**Method** : `GET`

**Content-Type** : `none`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "content": {
      "postHead": {
        "title": "My Awesome Blog",
        "place": "Dhaka, Bangladesh",
        "titleImage": "https://firebasestorage.googleapis.com/v0/b/nuxt-blog-syds.appspot.com/o/saiduriad666@gmail.com%2Fcmir.png?alt=media"
      },
      "postContents": [
        {
          "type": "header",
          "data": {
            "text": "Hi Header",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Hi Header Again Bruh",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Hi Header damn",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        }
      ]
    },
    "keywords": ["Dhaka", "Bangladesh", "Travel", "nsfw"],
    "_id": "bjhfdv7udf7royq788n9yx3",
    "author": "sazzadshopno6@gmail.com",
    "nsfw": true,
    "createdAt": "2021-05-04T06:06:19.434Z",
    "__v": 0
  },
  {
    "content": {
      "postHead": {
        "title": "My Awesome Blog",
        "place": "Dhaka, Bangladesh",
        "titleImage": "https://firebasestorage.googleapis.com/v0/b/nuxt-blog-syds.appspot.com/o/saiduriad666@gmail.com%2Fcmir.png?alt=media"
      },
      "postContents": [
        {
          "type": "header",
          "data": {
            "text": "Hi Header",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Hi Header Again Bruh",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Hi Header damn",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        }
      ]
    },
    "keywords": ["Dhaka", "Bangladesh", "Travel", "nsfw"],
    "_id": "6090e6837d2a49307441af40",
    "author": "sazzadshopno6@gmail.com",
    "nsfw": true,
    "createdAt": "2021-05-04T06:16:00.252Z",
    "__v": 0
  },
  {
    "content": {
      "postHead": {
        "title": "My Awesome Blog",
        "place": "Dhaka, Bangladesh",
        "titleImage": "https://firebasestorage.googleapis.com/v0/b/nuxt-blog-syds.appspot.com/o/saiduriad666@gmail.com%2Fcmir.png?alt=media"
      },
      "postContents": [
        {
          "type": "header",
          "data": {
            "text": "Hi Header",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Hi Header Again Bruh",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Hi Header damn",
            "level": 2
          }
        },
        {
          "type": "image",
          "data": {
            "file": {
              "url": "https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png",
              "nsfw": false,
              "scrsetURLs": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg 400w, https://dark-image-url.herokuapp.com/uploads/jbsadjksdhkbca/1448x516-carbon-(1).png 600w"
            },
            "caption": "caption nice",
            "withBorder": false,
            "stretched": false,
            "withBackground": false
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<b>Bold now?</b>"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "<i>Italic&nbsp;</i>"
          }
        },
        {
          "type": "list",
          "data": {
            "style": "ordered",
            "items": ["list one", "list two", "list three"]
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": ["list one", "list two", "list three"]
          }
        }
      ]
    },
    "keywords": ["Dhaka", "Bangladesh", "Travel", "nsfw"],
    "_id": "6090f034764125002834edef",
    "author": "sazzadshopno6@gmail.com",
    "nsfw": true,
    "createdAt": "2021-05-04T06:57:35.406Z",
    "__v": 0
  }
]
```
