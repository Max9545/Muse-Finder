describe('Muse Finder', () => {

  beforeEach(() => {
    
    // cy.intercept('https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.get?artist_id=25770297&apikey=0f9be22f858591d254989feff9a29844', {fixture: 'mock-artist-data.json'})
    // cy.intercept('https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=25770297&s_release_date=desc&g_album_name=1&apikey=0f9be22f858591d254989feff9a29844', {fixture: 'mock-album-data.json'})
    cy.visit('http://localhost:3000/')
  })


  it('Should present the user with a choice of countries by map or by dropdown list and present an list of top 5 artists when a country is selected', () => {
      cy
      .get('h1').should('contain', 'Find your Muse')
      .get('label').should('contain', 'Select a country by typing or by using the drop down list or click on the map')
      .get('select[type="drop-down"]').select('France')
      .get('h2').should('contain', 'Top 5 Artists from')
      .get('article').should('contain', 'gambino')
  })
  it('Should display an artists details when selected', () => {
    cy
    .get('select[type="drop-down"]').select('France')
    .get('section:first').click()
    .get('h3').should('contain', 'Albums:')
    .get('button').should('contain', 'Favorite This Artist')
  })
})
