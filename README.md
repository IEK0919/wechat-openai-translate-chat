
# 🌐 WeChat × OpenAI 翻訳チャットアプリ（TTS・履歴保存・管理機能付き）

## ✅ 機能一覧
- GPT APIによる翻訳
- 言語自動判定
- 音声入力（Whisper想定）
- 音声出力（TTS：Tencent Cloud）
- 音声読み上げ
- チャット履歴保存（Firestoreなど対応可）
- ナイトモード対応
- 管理者向けダッシュボード（翻訳数・ユーザー統計など）

## 📦 構成
- `miniprogram/` WeChat ミニプログラムUI
- `cloud-functions/` OpenAI / TTS用中継API
- `dashboard/` Reactベース管理画面雛形
- `docs/` 提案書など
