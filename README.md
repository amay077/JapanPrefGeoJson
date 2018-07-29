JapanPrefGeoJson - 日本の各都道府県のGeoJson
----

## これは何？

これは [Data of Japan](https://github.com/dataofjapan/land) の ``japan.geojson`` を都道府県別にバラしたポリゴンの .geojson ファイル群です。

ファイル名は都道府県コードであり、例えば ``prefs/23.geojson`` は、愛知県の領域を示す Polygon で構成された GeoJson ファイルです。

## 変換スクリプト

``make_pref_geojson.js`` は、 ``japan.geojson`` を各都道府県jsonにバラす、node.js で動作するスクリプトです。

```
node make_pref_geojson.js
```

で動作します(v8.11.3 で確認)。

## ライセンス

使用ライセンスは配布元に準じ、Public Domain とします。