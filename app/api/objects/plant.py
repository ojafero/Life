class Plant(object):
  def __init__(self, name, grower, images, is_public, id=None, species=None, location=None,
    funding=0, upvotes=0, health=None, owners=1):
    self.id = id
    self.name = name
    self.species = species
    self.grower = grower
    self.location = location
    self.funding = funding
    self.upvotes = upvotes
    self.images = images
    self.owners = owners
    self.health = health
    self.is_public = is_public

  @staticmethod
  def from_dict(source):
    plant = Plant(source[u'name'], source[u'grower'], source[u'images'], source[u'is_public'])

    if source.get(u'health'):
      plant.health = source[u'health']

    if source.get(u'species'):
      plant.species = source[u'species']
    
    if source.get(u'location'):
      plant.location = source[u'location']

    if source.get(u'funding'):
      plant.funding = source[u'funding']

    if source.get(u'upvotes'):
      plant.upvotes = source[u'upvotes']

    if source.get(u'owners'):
      plant.owners = source[u'owners']

    return plant
