class Image(object):
  def __init__(self, url, upload_date):
    self.url = url
    self.upload_date = upload_date

  @staticmethod
  def from_dict(source):
    return Image(source[u'url'], source[u'upload_date'])

  def to_dict(self):
    dest = {
      u'url': self.url,
      u'upload_date': self.upload_date
    }

    return dest
  