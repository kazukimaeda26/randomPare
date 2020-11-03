# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Theme.create(content: "土日にあったこと", week:"mon", span:"mor")
Theme.create(content: "おすすめの学習方法、最近効果のあった学習法", week:"tue", span:"mor")
Theme.create(content: "オリジナルアプリ（学習方法）の改善点", week:"wed", span:"mor")
Theme.create(content: "おすすめの休憩方法", week:"thu", span:"mor")
Theme.create(content: "最近失敗したこと、失敗した時間の使い方", week:"fri", span:"mor")

Theme.create(content: "最近あったよかったこと", week:"mon", span:"eve")
Theme.create(content: "好きな名言", week:"tue", span:"eve")
Theme.create(content: "プログラミングを勉強してやりたいこと", week:"wed", span:"eve")
Theme.create(content: "オリジナルアプリ（学習方法）のアピールポイント", week:"thu", span:"eve")
Theme.create(content: "土日の目標・予定", week:"fri", span:"eve")