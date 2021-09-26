class Image(object):
  def __init__(self, id, url, upload_date):
    self.id = id
    self.url = url
    self.upload_date = upload_date

  @staticmethod
  def from_dict(source):
    return Image(source[u'id'], source[u'url'], source[u'upload_date'])
            
  