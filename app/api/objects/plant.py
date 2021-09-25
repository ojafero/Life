class Plant(Object):
  def __init__(self, name, species, health, grower, location, 
    funding, upvotes, images, owners):
    self.name = name
    self.species = species
    self.health = health
    self.grower = grower
    self.location = location
    self.funding = funding
    self.upvotes = upvotes
    self.images = images
    self.owners = owners

  @staticmethod
  def from_dict(source):
    plant = Plant(source[u'name'], source[u'species'],
      source[u'health'], source[u'grower'], source[u'location'],
      source[u'funding', source[u'upvotes'], source[u'images'],
      source[u'owners'])

    return plant
