import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";

const url = "http://localhost:50031/user_dict";
const res = await fetchJSON(url);
console.log(res);

/*
surface : str 言葉の表層形
pronunciation: str 言葉の発音（カタカナ）
accent_type: int アクセント型（音が下がる場所を指す）
word_type: WordTypes, optional PROPER_NOUN（固有名詞）、COMMON_NOUN（普通名詞）、VERB（動詞）、ADJECTIVE（形容詞）、SUFFIX（語尾）のいずれか
priority: int, optional 単語の優先度（0から10までの整数） 数字が大きいほど優先度が高くなる 1から9までの値を指定することを推奨
*/
