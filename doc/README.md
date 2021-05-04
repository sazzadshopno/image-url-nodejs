# Api Documentation

## Open Endpoints

Open endpoints require no Authentication.

## Closed Endpoints

Closed endpoints require a valid Token to be included in the header of the
request.

## Endpoints

### Meta

Endpoint for generating meta from given URL.

- [Get Meta](meta/meta.md) : `POST /api/meta/`

### Image

Endpoint to put an image in firebase storage and provide download link in response.

- [Get Image Url](image/image.md) : `POST /api/image/`

### Blog

Endpoint to manipulate blog posts.

- [Get All Blog](blog/get_blogs.md) : `GET /api/blog/`
- [Create Blog](blog/create_blog.md) : `POST /api/blog/create`
