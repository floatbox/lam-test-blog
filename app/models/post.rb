class Post < ActiveRecord::Base
  attr_accessible :author, :body, :status, :title, :short
  validates_presence_of :body, :title

  def self.statuses
    ['hidden', 'draft', 'published', 'deleted']
  end

  def safe_body
    body.gsub(/\n/, '<br />').html_safe
  end
end
