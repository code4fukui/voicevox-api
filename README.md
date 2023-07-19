# voicevox-api - TextToSpeech API

- [VOICEVOX API](https://voicevox.github.io/voicevox_engine/api/)を使うDeno用ライブラリ
- [COEIROINK](https://coeiroink.com/) は、[VOICEVOX API](https://voicevox.github.io/voicevox_engine/api/) 対応
- TTS, TextToSpeech, text to speech API
- 要 [Deno](https://deno.land)

## How to use

1. [COEIROINK](https://coeiroink.com/) を起動する ([API doc](http://localhost:50031/docs#/
))
2. TTS テキストから音声ファイルを生成する（→ out.wav）
```sh
deno run -A https://code4fukui.github.io/voicevox-api/say.js Denoはいいよ
```

## How to get by API

```js
import { fetchAudio } from "https://code4fukui.github.io/voicevox-api/fetchAudio.js";

const bin = await fetchAudio("Denoはいいよ");
console.log(bin);

const bin2 = await fetchAudio("声IDで声色を変えるよ", 10000);
console.log(bin2);
```

## Dictionary

ユーザー辞書インポート (user_dict.csv)
```sh
deno run -A https://code4fukui.github.io/voicevox-api/importDict.js
```
ユーザー辞書表示
```sh
deno run -A https://code4fukui.github.io/voicevox-api/showDict.js
```
ユーザー辞書エクスポート (user_dict.csv)
```sh
deno run -A https://code4fukui.github.io/voicevox-api/exportDict.js
```
ユーザー辞書全消去
```sh
deno run -A https://code4fukui.github.io/voicevox-api/clearDict.js
```

## How to change the voice

1. ボイスを入れる
    mac: /Applications/COEIROINK.app/Contents/MacOS/speaker_info
    Windows: COEIROINK_*/speaker_info
2. COEIROINKを再起動する
3. 使用するボイスidを取得する
```sh
deno run -A https://code4fukui.github.io/voicevox-api/showSpeakers.js
```
```json
[
  {
    supported_features: { permitted_synthesis_morphing: "ALL" },
    name: "つくよみちゃん",
    speaker_uuid: "3c37646f-3881-5374-2a83-149267990abc",
    styles: [ { name: "れいせい", id: 0 } ],
    version: "0.0.1"
  },
  {
    supported_features: { permitted_synthesis_morphing: "ALL" },
    name: "???",
    speaker_uuid: "???",
    styles: [ { name: "???", id: speakerid } ],
    version: "???"
  }
]
```
4. say.jsやfetchAudioの第二パラメータで指定する
