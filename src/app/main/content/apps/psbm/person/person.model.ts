import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Person {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: Date;
  isActive: boolean;
  image: string;

  waterBaptized: boolean;
  waterBaptismDate: Date;
  holyGhostBaptized: boolean;
  holyGhostBaptizedDate: Date;
  groups: string[];

  personType: PersonType;
  isChild: boolean;
  isPresbyter: boolean;
  officerTitle: OfficerTitle;
}

enum PersonType {
  MEMBER = 'MEMBER',
  VISITOR = 'VISITOR',
  CONVERT = 'CONVERT'
}

enum OfficerTitle {
  ELDER = 'ELDER',
  DEACON = 'DEACON',
  DEACONESS = 'DEACONESS'
}
