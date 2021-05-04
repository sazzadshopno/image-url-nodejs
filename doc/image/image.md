# Meta

Used to put an image in firebase storage and provide download link in response.

**URL** : `/api/image/`

**Method** : `POST`

**Content-Type** : `multipart/form-data`

**Auth required** : YES

**Data constraints**

```json
{
  "postId": "some-post-id",
  "image": image_file
}
```

**Data example**

```json
{
  "postId": "6090e6837d2a49307441af40",
  "image": de2a6794-29a8-4aba-a8f3-9714fc199547.png
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": 1,
  "file": {
    "url": "https://firebasestorage.googleapis.com/v0/b/travelersofbanagladesh.appspot.com/o/6090e6837d2a49307441af40%2F3f2a5173-2140-47fd-980d-217abb25de19.png?alt=media",
    "nsfw": false
  }
}
```

## Error Response

**Condition** : If `postId` or `image` is not valid

**Content** :

```json
{
  "success": 0,
  "message": "(postId or image) not provided"
}
```
