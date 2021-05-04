# Meta

Used to generate meta from given URL.

**URL** : `/api/meta/`

**Method** : `POST`

**Content-Type** : `application/json`

**Auth required** : NO

**Data constraints**

```json
{
  "url": "[valid url]"
}
```

**Data example**

```json
{
  "url": "facebook.com"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": 1,
  "meta": {
    "title": "Facebook - Log In or Sign Up",
    "description": "Log into Facebook to start sharing and connecting with your friends, family, and people you know.",
    "image": {
      "url": "https://www.facebook.com/images/fb_icon_325x325.png"
    }
  }
}
```

## Error Response

**Condition** : If `url` is not valid

**Content** :

```json
{
  "err": {
    "error": true,
    "result": {
      "success": false,
      "requestUrl": "http://xaihfouia.com/",
      "error": "Page not found",
      "errorDetails": {}
    }
  }
}
```
