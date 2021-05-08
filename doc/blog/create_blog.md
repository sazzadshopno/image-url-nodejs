# Create Blog

Used to store a post in database.

**URL** : `/api/blog/create`

**Method** : `POST`

**Content-Type** : `application/json`

**Auth required** : YES

**Data constraints**

```json
{
  "id": "",
  "author": "",
  "nsfw": "",
  "keywords": [""],
  "content": {
    "postHead": {
      "title": "",
      "place": "",
      "titleImage": ""
    },
    "postContents": [""]
  }
}
```

**Data example**

```json
{
  "id": "bjhfdv7udf7royq788n9yx3",
  "author": "psyche",
  "nsfw": "true",
  "createdAt": "4/3/2021, 1:39:34 PM",
  "updatedAt": "10/3/2021, 2:59:34 PM",
  "keywords": ["Dhaka", "Bangladesh", "Travel", "nsfw"],
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
  }
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": 1,
  "createdProduct": {
    "keywords": ["Dhaka", "Bangladesh", "Travel", "nsfw"],
    "_id": "6090e6837d2a49307441af4ss0",
    "author": "sazzadshopno6@gmail.com",
    "nsfw": true,
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
    "createdAt": "2021-05-04T11:24:07.673Z",
    "__v": 0
  }
}
```

## Error Response

**Condition** : If `user` not authorized.

**Content** :

```json
Unauthorized
```
