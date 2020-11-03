class HomesController < ApplicationController
  def index
    now = Time.now.wday
    case now
    when 0 then
      @themeMor = "今日は日曜日です。朝礼はありません。"
      @themeEve = "今日は日曜日です。夕礼はありません。"
    when 1 then
      @themeMor = Theme.find_by(week: "mon", span: "mor")
      @themeEve = Theme.find_by(week: "mon", span: "eve")
    when 2 then
      @themeMor = Theme.find_by(week: "tue", span: "mor")
      @themeEve = Theme.find_by(week: "tue", span: "eve")
    when 3 then
      @themeMor = Theme.find_by(week: "wed", span: "mor")
      @themeEve = Theme.find_by(week: "wed", span: "eve")
    when 4 then
      @themeMor = Theme.find_by(week: "thu", span: "mor")
      @themeEve = Theme.find_by(week: "thu", span: "eve")
    when 5 then
      @themeMor = Theme.find_by(week: "fri", span: "mor")
      @themeEve = Theme.find_by(week: "fri", span: "eve")
    when 6 then
      @themeMor = "今日は土曜日です。朝礼はありません。"
      @themeEve = "今日は土曜日です。夕礼はありません。"
    end
  end
end
