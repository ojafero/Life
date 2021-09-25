class User(object):
  def __init__(self, first_name, last_name, profile_picture, location, is_grower):
    self.first_name = first_name
    self.last_name = last_name
    self.profile_picture = profile_picture
    self.location = location
    self.is_grower = is_grower

    
  @staticmethod
  def from_dict(source):
    user = User(source[u'first_name'], source[u'last_name'], source[u'profile_picture'],
      source[u'location'], source[u'is_grower'])

    return user