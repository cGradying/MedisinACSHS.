window.MEDISIN_HOSPITALS = {
  public: [
    { town: 'central', label: 'RPHS - Central Office', name: 'RPHS - Central Office', phone: '(02) 8653-1051 / (02) 8256-3000' },
    { town: 'morong', label: 'Morong', name: 'RPHS - Morong (Main)', phone: '(02) 8653-1051' },
    { town: 'angono', label: 'Angono', name: 'RPHS - Angono', phone: '(02) 8451-0365 / 0917-154-5041' },
    { town: 'binangonan', label: 'Binangonan', name: 'RPHS - Binangonan', phone: '(02) 8688-9474 / 0917-815-2372' },
    { town: 'montalban', label: 'Montalban / Rodriguez', name: 'RPHS - Montalban (C.A. Ynares)', phone: '(02) 8570-8261 / 0999-229-7939' },
    { town: 'taytay', label: 'Taytay', name: 'RPHS - Taytay', phone: '(02) 8661-5298' },
    { town: 'sanmateo', label: 'San Mateo', name: 'RPHS - San Mateo', phone: '(02) 8539-1400' }
  ],

  privateGroups: [
    {
      towns: ['cainta', 'taytay'],
      label: 'Cainta & Taytay',
      hospitals: [
        { name: 'Metro Rizal Doctors Hospital (Cainta)', phone: '(02) 8234-0331' },
        { name: 'Manila East Medical Center (Taytay)', phone: '(02) 8660-0000' },
        { name: 'Taytay Doctors Hospital', phone: '(02) 8571-7000' }
      ]
    },
    {
      towns: ['sanmateo', 'montalban'],
      label: 'San Mateo & Rodriguez (Montalban)',
      hospitals: [
        { name: 'San Mateo Medical Center', phone: '(02) 8539-1400' },
        { name: 'San Mateo Doctors Hospital', phone: '(02) 8534-1200' },
        { name: 'St. Matthaeus Medical Hospital', phone: '(02) 8997-1741' }
      ]
    },
    {
      towns: ['binangonan', 'angono'],
      label: 'Binangonan & Angono',
      hospitals: [
        { name: 'Pag-asa Hospital (Binangonan)', phone: '(02) 8652-0310' },
        { name: 'St. Bernard Infirmary (Binangonan)', phone: '(02) 8451-2180' },
        { name: 'San Isidro Hospital (Angono)', phone: '(02) 8451-0365' }
      ]
    },
    {
      towns: ['tanay', 'pililla'],
      label: 'Tanay & Pililla',
      hospitals: [
        { name: 'Tanay General Hospital', phone: '(02) 8654-1033' },
        { name: 'Tanay Community Hospital', phone: '(02) 8654-1049' }
      ]
    }
  ],

  townAliases: {
    'antipolo': 'antipolo',
    'morong': 'morong',
    'angono': 'angono',
    'binangonan': 'binangonan',
    'montalban': 'montalban',
    'rodriguez': 'montalban',
    'taytay': 'taytay',
    'san mateo': 'sanmateo',
    'sanmateo': 'sanmateo',
    'cainta': 'cainta',
    'tanay': 'tanay',
    'pililla': 'pililla',
    'pillila': 'pililla'
  }
};
