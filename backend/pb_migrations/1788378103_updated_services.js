/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_863811952")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3402113753",
    "max": 0,
    "min": 0,
    "name": "price",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2615518641",
    "max": 0,
    "min": 0,
    "name": "short_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "file2588085533",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Cover_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "file136349711",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "before_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "file2521839687",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "after_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "help": "",
    "hidden": false,
    "id": "file1194031162",
    "maxSelect": 10,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "gallery",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_863811952")

  // remove field
  collection.fields.removeById("text3402113753")

  // remove field
  collection.fields.removeById("text2615518641")

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("file2588085533")

  // remove field
  collection.fields.removeById("file136349711")

  // remove field
  collection.fields.removeById("file2521839687")

  // remove field
  collection.fields.removeById("file1194031162")

  return app.save(collection)
})
