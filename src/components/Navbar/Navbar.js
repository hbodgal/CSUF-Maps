import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import './Navbar.css';

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const mockData = [
            { "name": "Anderson Field", "code": "AF", "lat": "33.8863818494202", "long": "-117.88497158468293" },
            { "name": "Bookstore/Titan Shops", "code": "B", "lat": "33.88196920405523", "long": "-117.88687397078951" },
            { "name": "Becker Amphitheater", "code": "BA", "lat": "33.881387640410196", "long": "-117.88715003398144" },
            { "name": "Greenhouse Complex", "code": "BGC", "lat": "33.87982361538679", "long": "-117.88743739380908" },
            { "name": "Children's Center", "code": "CC", "lat": "33.88600328652946", "long": "-117.88833321810696" },
            { "name": "Carl's Jr.", "code": "CJ", "lat": "33.879485820988904", "long": "-117.88381284577275" },
            { "name": "College Park", "code": "CP", "lat": "33.87775672858179", "long": "-117.88344290372363" },
            { "name": "Corporation Yard", "code": "CY", "lat": "33.88425081434328", "long": "-117.88883130372339" },
            { "name": "Computer Science", "code": "CS", "lat": "33.88258558057847", "long": "-117.88263123719899" },
            { "name": "Computer Engineering Program", "code": "CS", "lat": "33.88282774622885", "long": "-117.8832285811306" },
            { "name": "Engineering", "code": "E", "lat": "33.8828255737883", "long": "-117.88322254745782" },
            { "name": "Education-Classroom", "code": "EC", "lat": "33.881360255782816", "long": "-117.88435280260195" },
            { "name": "Engineering & Computer Science", "code": "ECS", "lat": "33.882373423227456", "long": "-117.88279881537012" },
            { "name": "Eastside Parking Structure", "code": "EPS", "lat": "33.880451534717146", "long": "-117.88120587357407" },
            { "name": "ECS Quad", "code": "EPS", "lat": "33.882376185741606", "long": "-117.8840608743125" },
            { "name": "Golleher Alumni House", "code": "G", "lat": "33.88244921829362", "long": "-117.88937127488802" },
            { "name": "Goodwin Field", "code": "GF", "lat": "33.887308194820115", "long": "-117.88528904605268" },
            { "name": "Humanities-Social Sciences", "code": "H", "lat": "33.8806319532486", "long": "-117.88421413904678" },
            { "name": "Kinesiology & Health Science", "code": "KHS", "lat": "33.88367230203364", "long": "-117.88581714605269" },
            { "name": "Langsdorf Hall", "code": "LH", "lat": "33.879164212921324", "long": "-117.8843116371999" },
            { "name": "McCarthy Hall", "code": "MH", "lat": "33.87972473228038", "long": "-117.88556875715852" },
            { "name": "Mechanical Engineering and Civil Engineering Labs", "code": "MECEL", "lat": "33.882049542683255", "long": "-117.88290027082056" },
            { "name": "Parking & Transportation Office", "code": "P", "lat": "33.88500259274584", "long": "-117.88943713255863" },
            { "name": "Pollak Library", "code": "PL", "lat": "33.881434682492326", "long": "-117.88520275321267" },
            { "name": "Ruby Gerontology Center", "code": "RGC", "lat": "33.883895999900275", "long": "-117.88327226240236" },
            { "name": "Student Health & Counseling Center", "code": "SHCC", "lat": "33.87993934715555", "long": "-117.88544598517538" },
            { "name": "Student Housing Mailroom", "code": "SHMR", "lat": "33.88367472389682", "long": "-117.88157034207192" },
            { "name": "Mihaylo Hall", "code": "SGMH", "lat": "33.878685735146306", "long": "-117.88331845915823" },
            { "name": "Housing and Residential Engagement Office", "code": "HRE", "lat": "33.883161188836844", "long": "-117.88154768245519" },
            { "name": "Student Housing", "code": "SH", "lat": "33.883678289671806", "long": "-117.88205287770623" },
            { "name": "Student Rec Center", "code": "SRC", "lat": "33.883146229634065", "long": "-117.88779803708273" },
            { "name": "Titan Gymnasium", "code": "TG", "lat": "33.883503745958556", "long": "-117.8861132555708" },
            { "name": "Titan House", "code": "TH", "lat": "33.883856905982", "long": "-117.88418663223041" },
            { "name": "Titan Stadium", "code": "TS", "lat": "33.88674761993404", "long": "-117.88698454688004" },
            { "name": "Titan Student Union", "code": "TSU", "lat": "33.88208830517615", "long": "-117.88897450372345" },
            { "name": "University Hall", "code": "UH", "lat": "33.87987192394445", "long": "-117.88420509022961" },
            { "name": "Student Business Services", "code": "UH", "lat": "33.87943004126346", "long": "-117.8842115765519" },
            { "name": "Office of Financial Aid", "code": "OFA", "lat": "33.879754783318205", "long": "-117.8840242538138" },
            { "name": "University Police", "code": "UP", "lat": "33.882406132234436", "long": "-117.88943734790023" },
            { "name": "Visual Arts", "code": "VA", "lat": "33.88021497315871", "long": "-117.88862674605281" },
            { "name": "Nutwood Parking Structure", "code": "NPS", "lat": "33.879208003636194", "long": "-117.88856223255888" },
            { "name": "State College Parking Structure", "code": "SCPS", "lat": "33.883509639331145", "long": "-117.8886896364787" },
            { "name": "Parking Lot A", "code": "A", "lat": "33.887384769163454", "long": "-117.88877970973589" },
            { "name": "Parking Lot G", "code": "G", "lat": "33.88838776216633", "long": "-117.8865509671581" },
            { "name": "Parking Lot E", "code": "E", "lat": "33.88212374145178", "long": "-117.88157228656694" },
            { "name": "Parking Lot D", "code": "D", "lat": "33.88414679733034", "long": "-117.88780768141838" },
            { "name": "Juniper Hall", "code": "D", "lat": "33.88413307483887", "long": "-117.88249030455177" },
            { "name": "Sexual Violence Prevention & Advocacy Services", "code": "SVAS", "lat": "33.88548998340789", "long": "-117.8820578007532" },
            { "name": "Birch", "code": "B", "lat": "33.88468195545701", "long": "-117.88227435789986" },
            { "name": "Fig Hall", "code": "FH", "lat": "33.88453936069756", "long": "-117.88173585924024" },
            { "name": "Pine Hall", "code": "PH", "lat": "33.883768469751075", "long": "-117.88274030466405" },
            { "name": "Gastronome", "code": "G", "lat": "33.88306385149187", "long": "-117.88232783495576" },
            { "name": "Fullerton Marriott", "code": "F", "lat": "33.87884199263883", "long": "-117.88202512147934" },
            { "name": "College of Business & Economics", "code": "CBE", "lat": "33.87877489514845", "long": "-117.8831832345005" },
            { "name": "Office of Admissions", "code": "OA", "lat": "33.87899846155552", "long": "-117.88468405797767" },
            { "name": "Dan Black Hall", "code": "DBH", "lat": "33.87903857349474", "long": "-117.88558835177263" },
            { "name": "College of Natural Science and Mathematics", "code": "CNSM", "lat": "33.87945714245454", "long": "-117.8855876985509" },
            { "name": "Student Health And Counseling Center Pharmacy", "code": "HCC", "lat": "33.879938343246366", "long": "-117.88544508986918" },
            { "name": "Desert Studies Center, Department of Biological Science", "code": "DSC", "lat": "33.87960981520707", "long": "-117.88571389426289" },
            { "name": "Department of Music", "code": "DM", "lat": "33.88037959863584", "long": "-117.88703228480672" },
            { "name": "Becker Amphitheater", "code": "BA", "lat": "33.88127531796418", "long": "-117.88713303330498" },
            { "name": "Meng Concert Hall", "code": "MCH", "lat": "33.880603663886816", "long": "-117.88728201360583" },
            { "name": "Hallberg Theatre", "code": "HT", "lat": "33.880490984692415", "long": "-117.88710359872391" },
            { "name": "Young Theatre", "code": "YT", "lat": "33.880394124494096", "long": "-117.88740072725523" },
            { "name": "Clayes Performing Arts Center", "code": "CPA", "lat": "33.88049657876305", "long": "-117.88669575749618" },
            { "name": "Recital Hall", "code": "RH", "lat": "33.880399144594534", "long": "-117.88618339266652" },
            { "name": "Little Theatre", "code": "LT", "lat": "33.88021821868433", "long": "-117.88616193499588" },
            { "name": "Digital Print Service", "code": "DPS", "lat": "33.881620736835", "long": "-117.88509967539167" },
            { "name": "Starbucks - Library", "code": "SB", "lat": "33.88146235133958", "long": "-117.88510094593785" },
            { "name": "Wells Fargo ATM", "code": "ATM", "lat": "33.88173545304734", "long": "-117.8871681777371" },
            { "name": "U.S. Bank Branch", "code": "UB", "lat": "33.881756882094706", "long": "-117.88691260205516" },
            { "name": "Titan Bowl & Billiards", "code": "TBB", "lat": "33.88160979019925", "long": "-117.88799459407525" },
            { "name": "Amazon Hub Locker", "code": "AHL", "lat": "33.88173226623373", "long": "-117.88771648046433" },
            { "name": "CSUF Campus Dining", "code": "CD", "lat": "33.88179566002232", "long": "-117.88774788216337" },
            { "name": "Panda Express", "code": "PE", "lat": "33.88189419328089", "long": "-117.88766406313728" },
            { "name": "Hibachi-San", "code": "HS", "lat": "33.881981036058484", "long": "-117.88780219689228" },
            { "name": "Baja Fresh", "code": "BF", "lat": "33.88187248257269", "long": "-117.88788266315731" },
            { "name": "TOGO's Sandwich", "code": "TGS", "lat": "33.881927510541736", "long": "-117.88834185520697" },
            { "name": "Eastside Visitor Information Center", "code": "EVIC", "lat": "33.87968902933005", "long": "-117.88172019972332" },
            { "name": "U.S. Army Reserves Officer Training Corps", "code": "USAROT", "lat": "33.88415361618297", "long": "-117.88410840308924" },
            { "name": "Mackey Auditorium", "code": "MA", "lat": "33.88389415383128", "long": "-117.88339517400708" },
            { "name": "Shapiro Wing", "code": "SW", "lat": "33.88330360376555", "long": "-117.88310821580549" },
            { "name": "Intramural Field", "code": "IF", "lat": "33.8838882890766", "long": "-117.88560735069707" },
            { "name": "Titan Track Complex", "code": "TTC", "lat": "33.8851304097555", "long": " -117.88645094170842" },
            { "name": "Titan Sports Complex", "code": "TSC", "lat": "33.885555829247075", "long": "-117.88599591199646" },
            { "name": "Goodwin Field", "code": "GF", "lat": "33.88713998915694", "long": "-117.8853109116486" },
            { "name": "Corporation Yard", "code": "CY", "lat": "33.88406360981741", "long": "-117.88883098484268" },
            { "name": "Shipping & Receiving", "code": "SR", "lat": "33.88375889876557", "long": "-117.8886019676567" },
            { "name": "T100 - Capital Programs & Facilities Management", "code": "CPFM", "lat": "33.88454524160617", "long": "-117.8885526640535" },
            { "name": "Titan Courts", "code": "TC", "lat": "33.88419196570397", "long": "-117.8869992654921" },
            { "name": "Department of Kinesiology", "code": "DK", "lat": "33.88280859508566", "long": "-117.88613238235124" },
            { "name": "Salsa Club", "code": "SC", "lat": "33.88287372647914", "long": "-117.88627856273274" },
            { "name": "Department of Health Science", "code": "CPFM", "lat": "33.8828753965142", "long": "-117.88613372345566" },
            { "name": "KHS 199 CSUF", "code": "KHS", "lat": "33.88265792561345", "long": "-117.88564972434013" },
            { "name": "Nathan L. Longcrier, MS", "code": "NLL", "lat": "33.883012475659136", "long": "-117.88446672968388" },
            { "name": "Student Wellness", "code": "SW", "lat": "33.88283312516934", "long": "-117.88416192388277" },
            { "name": "Titan Radio", "code": "TR", "lat": "33.88092547871467", "long": "-117.88507801091154" },
            { "name": "Quad", "code": "Q", "lat": "33.88035489426351", "long": "-117.8852628831208" },
            { "name": "Department Of Intercollegiate Athletics", "code": "DIA", "lat": "33.87930182923263", "long": "-117.88377185989138" },
            { "name": "Gordon Hall", "code": "GH", "lat": "33.87968739016978", "long": "-117.88417232533361" },
            { "name": "Aloha Java", "code": "AJ", "lat": "33.880157489877774", "long": "-117.88395441629014" },
            { "name": "Juice It Up!", "code": "JIU", "lat": "33.88077717818574", "long": "-117.8840216157655" },
            { "name": "Department of Military Science", "code": "DMS", "lat": "33.882763076715015", "long": "-117.88297392687238" },
            { "name": "Fullerton Betty", "code": "FB", "lat": "33.883049286667315", "long": "-117.88192942147164" },
            { "name": "Community Market", "code": "CM", "lat": "33.883430048912665", "long": "-117.88257037224979" },
            { "name": "Holly Hall", "code": "HH", "lat": "33.88388539548246", "long": "-117.88170206163642" },
            { "name": "Juniper Laundry Room", "code": "JLR", "lat": "33.88403621403294", "long": "-117.88201419400274" },
            { "name": "Osher Lifelong Learning Institute ", "code": "OLLI", "lat": "33.8837049331996", "long": "-117.88309041776893" },
            { "name": "Commons", "code": "CO", "lat": "33.88147967161163", "long": "-117.88626822095526" },
            { "name": "Titan Hall", "code": "TH", "lat": "33.88090784930576", "long": "-117.89004341536096" },
            { "name": "Auxiliary Services Corp", "code": "ASC", "lat": "33.881214264078345", "long": "-117.89056540871596" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "lat": "33.88806229111271", "long": "-117.8857813425155" },
            { "name": "Arboretum Parking", "code": "AP", "lat": "33.888020661448266", "long": "-117.88519028879865" },
            { "name": "Parking Lot C", "code": "PLC", "lat": "33.87836009041641", "long": "-117.88887015743701" },
            { "name": "Parking Lot F", "code": "PLF", "lat": "33.8803927919013", "long": "-117.88302566415527" },
            { "name": "Parking Lot S", "code": "PLS", "lat": "33.876125151808615", "long": "-117.88333015829771" },
            { "name": "South Central Coastal Information Center", "code": "SCCIS", "lat": "33.87970996188701", "long": "-117.8854635694232" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "lat": "33.88806229111271", "long": "-117.8857813425155" },
        
    // Add more locations as needed
  ];

  const handleSearch = (selectedLocation) => {
    onSearch(selectedLocation.lat, selectedLocation.long);
  };

  const getOptionLabel = (option) => {
      const input = searchTerm.toLowerCase();
      console.log(input)
      const code = option.code?.toLowerCase();
      const name = option.name?.toLowerCase();
      console.log('code='+code)
      return !input || (name?.includes(input) || code?.includes(input)) ? option.name : ''; 
    };

  return (
    <div className="heading">
      <h1>CSUF Campus Map</h1>
      <div className="search-bar">
        <Autocomplete
          options={mockData}
          getOptionLabel={getOptionLabel}
          value={null}
          onChange={(event, value) => {
            if (value) {
              handleSearch(value);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search for a location"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          )}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />
      </div>
    </div>
  );
}
