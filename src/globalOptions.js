import { Howl, Howler } from "howler";

// Web Audio APIが利用可能な場合はtrue
console.log(Howler.usingWebAudio);

// 利用可能なオーディオがない場合はtrue
console.log(Howler.noAudio);

// モバイル（iOS、Androidなど）デバイスおよびデスクトップのChrome / Safariでオーディオを自動的に有効にしようとします。
console.log(Howler.autoUnlock);
