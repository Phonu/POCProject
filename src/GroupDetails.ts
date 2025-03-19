export interface GroupDetails {
  status: number;
  message: string;
  response: Response[];
}

export interface Response {
  groupId: string;
  name: string;
  companyId: string;
  companyName: string;
  ownershipType: string;
  type: string;
  trackers: any[];
  members: Member[];
  forms: Forms[];
  modules: string[];
  tags: string[];
  createdOn: number;
  createdBy: string;
  quickFilters: any[];
  about: string;
  cluster: boolean;
  guestMode: boolean;
  navigationNodes: any[];
  groupSettings: GroupSettings;
  taskDetails: any[];
  size: number;
}

export interface GroupSettings {
  membershipSettings: MembershipSettings;
  groupFeatureVisibilityConfiguration: GroupFeatureVisibilityConfiguration;
  groupGridViewSettings: GroupGridViewSettings;
}

export interface GroupFeatureVisibilityConfiguration {
  poll: boolean;
  taskCreation: boolean;
  assignedTask: boolean;
  mediaDirectory: boolean;
  showFormTemplate: boolean;
  archiveForm: boolean;
  copyForm: boolean;
}

export interface GroupGridViewSettings {
  showGridViewForAdmins: boolean;
  showGridViewForNonAdmins: boolean;
}

export interface MembershipSettings {
  companyMasterIds: any[];
  allEmployees: boolean;
}

export interface Member {
  groupId: string;
  userId: string;
  userPhone: string;
  userName: string;
  role: Role;
  email: string;
  joinedOn: number;
  joiningType: JoiningType;
}

export enum JoiningType {
  Normal = 'NORMAL',
}

export enum Role {
  Admin = 'ADMIN',
  Superadmin = 'SUPERADMIN',
  User = 'USER',
}

/// FORM INTERFACE

export interface Forms {
  groupId: string;
  formId: string;
  companyId: string;
  name: string;
  schema: Schema;
  adminOnly: boolean;
  isPublic: boolean;
  task: boolean;
  master: boolean;
  linkableOnly: boolean;
  disableDelete: boolean;
  updatable: boolean;
  chatDisabled: boolean;
  createdOn: number;
  createdBy?: string;
  createdByName?: string;
  createdByPhone?: string;
  updatedOn?: number;
  templateId?: string;
  assignable: boolean;
  hidden: boolean;
  formIsParent: boolean;
  formIsChild: boolean;
  alarmIds: any[];
  formSetting?: FormSetting;
  workflowId?: string;
  primaryKeyConstraints?: PrimaryKeyConstraint[];
  statuses?: string[];
}

export interface FormSetting {
  useAsPrefilledData: boolean;
  showUnansweredFields: boolean;
  hideDeleteWarningMessage?: boolean;
  autoPopulateDependentKeys: boolean;
  useDependentKeysForPredicates: boolean;
  bypassDisableDelete: boolean;
  profileDrivenFieldPresent: boolean;
  ignoreCreatePrimaryKeyConstraint: boolean;
  ignoreUpdatePrimaryKeyConstraint: boolean;
  disableNotificationForAnswerSubmission: boolean;
  sectionArrayPresent: boolean;
  addSMSInComment: boolean;
  sendMasterUpdateNotification?: boolean;
  maxSelectedConditionalAssignees: number;
  storeLocalisedValues: boolean;
}

export interface PrimaryKeyConstraint {
  key: string;
  conflictResolutionStrategy: string;
  source: string;
  scopeType: string;
  ids: string[];
}

export interface Schema {
  title: string;
  type: IMType;
  description: SchemaDescription;
  properties: SchemaProperties;
  required: string[];
  filterOnConditionPojo?: boolean;
  order: string[];
  autoPopulateDependentKeys?: boolean;
  previewFields?: string[];
  searchableKeys?: string[];
  masterId?: string;
  masterName?: string;
  masterType?: string;
  scoringConfigs?: SchemaScoringConfigs;
}

export enum SchemaDescription {
  Form = 'form',
}

export interface SchemaProperties {
  t?: T;
  ss?: Ackstatus;
  i?: Ad;
  l?: C;
  image_of_t?: IM;
  im?: IM;
  is?: Addi;
  b?: Ad;
  ima?: IM;
  is_?: Addi;
  a: A;
  d?: D;
  u?: U;
  w?: Ackstatus;
  do?: Ackstatus;
  wh?: Ad;
  p?: Batchen;
  s?: S;
  imag?: IM;
  batchen?: Batchen;
  batchrn?: Ackstatus;
  canp?: Batchen;
  image?: IM;
  bsinf?: Bsinf;
  ad?: Ad;
  br?: Ad;
  image_?: IM;
  bra?: Ad;
  image_o?: IM;
  are?: Ad;
  me?: Ackstatus;
  tr?: Tr;
  sel?: Ackstatus;
  infra?: Infra;
  doc?: Doc;
  doyou?: Ad;
  offen?: Batchen;
  over?: Batchen;
  addi?: Addi;
  covid?: Covid;
  ca?: CA;
  can?: Can;
  c?: C;
  o?: O;
  or?: Or;
  org?: Batchen;
  orga?: Batchen;
  e?: Ackstatus;
  em?: Au;
  emp?: Addit;
  v?: V;
  ve?: Ve;
  addit?: Addit;
  additi?: Addit;
  ov?: Batchen;
  sid?: Ackstatus;
  ackstatus?: Ackstatus;
  da?: Ackda;
  ackda?: Ackda;
  date?: Ackda;
  brandingScore?: Ackstatus;
  overallScore?: Batchen;
  documentationScore?: Ackstatus;
  trainingScore?: Addit;
  infrastructureScore?: Batchen;
  availabalityOfEquipments1?: Ad;
  availabilityOfCandidates1?: Addi;
  remarks?: Ackstatus;
  iname?: Addit;
  iname2?: Au;
  ins?: Batchen;
  insp?: Batchen;
  inspe?: Batchen;
  inspec?: Batchen;
  m?: Ackstatus;
  tcname?: Dim;
  scheme?: Ackstatus;
  tc?: Au;
  tca?: Au;
  au?: Au;
  ph?: Ph;
  f?: Au;
  fm?: Au;
  is_the?: Addi;
  nam?: Ackstatus;
  m1?: Ackstatus;
  pho?: Pho;
  doe?: Ackstatus;
  is_b?: Addi;
  is_t?: Addi;
  as?: As;
  avt?: Addi;
  iscct?: Addi;
  imact?: Imact;
  reast?: Addit;
  n?: Ackstatus;
  no?: Ackstatus;
  noo?: Ackstatus;
  nob?: Ackstatus;
  noc?: Ackstatus;
  nod?: Ackstatus;
  ins_name?: Batchen;
  ins_phn?: Batchen;
  sch_nm?: Ackstatus;
  ddt?: Ackda;
  sm?: Ackstatus;
  sd?: Ackstatus;
  at?: At;
  j?: Batchen;
  di?: Batchen;
  co?: Ackstatus;
  av?: Ad;
  pa?: Batchen;
  fa?: Fa;
  fe?: Fe;
  link?: Batchen;
  state?: Ackstatus;
  dist?: Addit;
  pr?: Dim;
  dr?: Dim;
  le?: Batchen;
  oj?: Oj;
  ba?: Ba;
  tci?: Oj;
  tpn?: Ba;
  tcn?: Ba;
  rep?: Rep;
  observ?: Batchen;
  obs?: Au;
  capt?: Batchen;
  attp?: Attp;
  go?: Au;
  pi?: Attp;
  pictu?: Attp;
  recom?: Addit;
  rec?: Ackstatus;
  fee?: Au;
  batchs?: BatchS;
  batch_s?: BatchS;
  abcd?: Abcd;
  dim?: Dim;
  tcld?: Tcld;
  tcsource1?: Tcsource1;
  cent?: Cent;
}

export interface A {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: PurpleProperties;
  required?: any[];
  filterOnConditionPojo?: boolean;
  order?: string[];
  predicates?: AckstatusPredicate[];
  autoPopulateDependentKeys?: boolean;
  layout?: Layout;
  enum?: ValueElement[];
  accessMatrix?: AttpAccessMatrix;
}

export interface AttpAccessMatrix {
  mandatory?: boolean;
  readOnly?: boolean;
  visibility: Visibility;
  answer?: string;
}

export enum Visibility {
  Gone = 'GONE',
  Invisible = 'INVISIBLE',
  Visible = 'VISIBLE',
}

export enum TypeEnum {
  Email = 'email',
  Label = 'label',
  Location = 'location',
  Number = 'number',
  Phone = 'phone',
  Section = 'section',
  StringList = 'string_list',
  Textfield = 'textfield',
}

export enum ValueElement {
  CentreFoundAtADifferentAddress = 'Centre found at a different address',
  EnumNO = 'NO',
  FoundAtADifferentNearbyAddress = 'Found at a different nearby address',
  No = 'No',
  Yes = 'Yes',
}

export enum Layout {
  NewPage = 'newPage',
  Radio = 'radio',
}

export interface AckstatusPredicate {
  condition: string;
  conditionObj?: PurpleConditionObj;
  action: Action;
  actionConfig?: PurpleActionConfig;
}

export enum Action {
  Calc = 'CALC',
  MakeMandatory = 'MAKE_MANDATORY',
  Show = 'SHOW',
}

export interface PurpleActionConfig {
  mandatory: boolean;
  optionFilterForMultipleKeys: boolean;
}

export interface PurpleConditionObj {
  groups: PurpleGroup[];
}

export interface PurpleGroup {
  expressions: PurpleExpression[];
}

export interface PurpleExpression {
  field: string;
  comparator: Rator;
  customValue: boolean;
  value: ValueElement;
  operator?: Rator;
}

export interface Rator {
  key: Key;
  name: Name;
}

export enum Key {
  Empty = '==',
  Key = '||',
  Purple = '&&',
}

export enum Name {
  And = 'AND',
  EqualTo = 'equal to',
  IsEitherOf = 'is either of',
  Or = 'OR',
}

export interface PurpleProperties {
  n?: Batchen;
  d?: Batchen;
  m?: Batchen;
  is?: Can;
  w?: Can;
  wa?: Can;
}

export interface Batchen {
  title: string;
  type: AddressType;
  description: TypeEnum;
  filterOnConditionPojo?: boolean;
  predicates?: BatchenPredicate[];
  autoPopulateDependentKeys?: boolean;
  accessMatrix?: BatchenAccessMatrix;
  populateMasterDataInServer?: boolean;
  items?: AddressClass;
  enum?: string[];
  layout?: Layout;
  columnName?: string;
  columnKey?: string;
  masterName?: string;
  masterType?: string;
}

export interface BatchenAccessMatrix {
  mandatory?: boolean;
  viewModeVisibility?: Visibility;
  visibility?: Visibility;
  answer?: number;
  readOnly?: boolean;
}

export interface AddressClass {
  type: AddressType;
  filterOnConditionPojo: boolean;
  autoPopulateDependentKeys?: boolean;
  items?: AddressClass;
}

export enum AddressType {
  Array = 'array',
  Number = 'number',
  String = 'string',
}

export interface BatchenPredicate {
  condition?: string;
  conditionObj?: PurpleConditionObj;
  action: Action;
  actionConfig?: FluffyActionConfig;
}

export interface FluffyActionConfig {
  mandatory?: boolean;
  optionFilterForMultipleKeys: boolean;
  formula?: string;
}

export interface Can {
  title: string;
  type: AddressType;
  description: TypeEnum;
  layout: Layout;
  enum: CanEnum[];
  hint?: string;
  predicates?: CanPredicate[];
}

export enum CanEnum {
  Female = 'Female',
  Male = 'Male',
  No = 'No',
  Yes = 'Yes',
}

export interface CanPredicate {
  condition: string;
  action: Action;
}

export enum IMType {
  Number = 'number',
  Object = 'object',
  String = 'string',
}

export interface Abcd {
  title: string;
  type: AddressType;
  description: TypeEnum;
  filterOnConditionPojo: boolean;
  predicates: AbcdPredicate[];
  accessMatrix: AbcdAccessMatrix;
}

export interface AbcdAccessMatrix {
  readOnly: boolean;
  visibility: Visibility;
}

export interface AbcdPredicate {
  action: Action;
  actionConfig: TentacledActionConfig;
}

export interface TentacledActionConfig {
  formula: string;
  optionFilterForMultipleKeys: boolean;
}

export interface Ackda {
  title: string;
  type: TypeEnum;
  description: BatchSDescription;
  filterOnConditionPojo: boolean;
  systemTime?: boolean;
  format: Format;
  timeUnit: TimeUnit;
  accessMatrix?: AckdaAccessMatrix;
  autoPopulateDependentKeys?: boolean;
}

export interface AckdaAccessMatrix {
  visibility: Visibility;
}

export enum BatchSDescription {
  Number = 'number',
  Textfield = 'textfield',
  Timestamp = 'timestamp',
}

export enum Format {
  DDMMMYyyy = 'dd MMM yyyy',
}

export enum TimeUnit {
  Day = 'DAY',
}

export interface Ackstatus {
  title: string;
  type: AddressType;
  description: TypeEnum;
  filterOnConditionPojo?: boolean;
  accessMatrix?: AckstatusAccessMatrix;
  autoPopulateDependentKeys?: boolean;
  predicates?: AckstatusPredicate[];
  layout?: Layout;
  enum?: string[];
  hint?: string;
  items?: AddressClass;
}

export interface AckstatusAccessMatrix {
  readOnly?: boolean;
  answer?: number | string;
  mandatory?: boolean;
  viewModeVisibility?: Visibility;
  visibility?: Visibility;
}

export interface Ad {
  title: string;
  type: AddressType;
  description: TypeEnum;
  items?: AdItems;
  filterOnConditionPojo: boolean;
  predicates?: AdPredicate[];
  autoPopulateDependentKeys?: boolean;
  layout?: Layout;
  enum?: string[];
  scoringConfigs?: AdScoringConfigs;
  sortOptions?: boolean;
  accessMatrix?: AdAccessMatrix;
  hint?: string;
}

export interface AdAccessMatrix {
  visibility?: Visibility;
  mandatory?: boolean;
  readOnly?: boolean;
}

export interface AdItems {
  type: IMType;
  properties?: FluffyProperties;
  required?: any[];
  filterOnConditionPojo: boolean;
  order?: string[];
  autoPopulateDependentKeys: boolean;
}

export interface FluffyProperties {
  i?: IM;
  c?: Batchen;
  cap?: Batchen;
  im?: Pi;
}

export interface IM {
  title: string;
  type: IMType;
  description: IMDescription;
  properties: IMProperties;
  filterOnConditionPojo?: boolean;
  maxSize?: number;
  minSize?: number;
  multimediaType: MultimediaType;
  disableFilepicker: boolean;
  enableGeoTagging?: boolean;
  autoPopulateDependentKeys?: boolean;
  locationMandatory?: boolean;
  predicates?: AckstatusPredicate[];
  hint?: string;
}

export enum IMDescription {
  Multimedia = 'multimedia',
}

export enum MultimediaType {
  Image = 'image',
}

export interface IMProperties {
  thumbnail: PropertiesItems;
  size: PropertiesItems;
  name: PropertiesItems;
  caption: PropertiesItems;
  contentType: PropertiesItems;
  url: PropertiesItems;
}

export interface PropertiesItems {
  type: IMType;
  filterOnConditionPojo?: boolean;
}

export interface Pi {
  title: string;
  type: IMType;
  description: IMDescription;
  properties: IMProperties;
  filterOnConditionPojo: boolean;
  maxSize: number;
  minSize: number;
  multimediaType: MultimediaType;
  disableFilepicker: boolean;
  autoPopulateDependentKeys: boolean;
}

export interface AdPredicate {
  condition: string;
  conditionObj?: FluffyConditionObj;
  action: Action;
  actionConfig?: PurpleActionConfig;
}

export interface FluffyConditionObj {
  groups: FluffyGroup[];
}

export interface FluffyGroup {
  expressions: FluffyExpression[];
}

export interface FluffyExpression {
  field: Field;
  comparator: Rator;
  customValue: boolean;
  value: ValueEnum[] | ValueElement;
  operator?: Rator;
}

export enum Field {
  AV = 'av',
  Avt = 'avt',
  DocH = 'doc.h',
  I = 'i',
  InfraAV = 'infra.av',
  Is = 'is',
  W = 'w',
}

export enum ValueEnum {
  Classroom = 'Classroom',
  Labs = 'labs',
  Reception = 'Reception',
}

export interface AdScoringConfigs {
  s1: PurpleS1;
}

export interface PurpleS1 {
  scoringList: number[];
}

export interface Addi {
  title: string;
  type: AddressType;
  description: TypeEnum;
  items?: AddiItems;
  filterOnConditionPojo?: boolean;
  autoPopulateDependentKeys?: boolean;
  layout?: Layout;
  sortOptions?: boolean;
  enum?: string[];
  accessMatrix?: AckdaAccessMatrix;
  scoringConfigs?: AdScoringConfigs;
  predicates?: AdPredicate[];
}

export interface AddiItems {
  type: IMType;
  properties?: TentacledProperties;
  required?: any[];
  filterOnConditionPojo?: boolean;
  order?: ItemsOrder[];
  autoPopulateDependentKeys?: boolean;
}

export enum ItemsOrder {
  C = 'c',
  I = 'i',
}

export interface TentacledProperties {
  i: IM;
  c: Ackstatus;
}

export interface StickyProperties {
  i: I;
  c: Addit;
}

export interface AdditItems {
  type: IMType;
  properties: StickyProperties;
  required: any[];
  order: ItemsOrder[];
}

export interface Addit {
  title: string;
  type: AddressType;
  description: TypeEnum;
  items?: AdditItems;
  filterOnConditionPojo?: boolean;
  predicates?: AckstatusPredicate[];
  accessMatrix?: BatchenAccessMatrix;
  autoPopulateDependentKeys?: boolean;
}

export interface I {
  title: string;
  type: IMType;
  description: IMDescription;
  properties: IndigoProperties;
  maxSize: number;
  minSize: number;
  multimediaType: MultimediaType;
  disableFilepicker: boolean;
}

export interface IndigoProperties {
  size: Caption;
  contentType: Caption;
  url: Caption;
  name: Caption;
  caption: Caption;
  thumbnail: Caption;
}

export interface Caption {
  type: AddressType;
}

export interface As {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: AsProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  predicates?: CanPredicate[];
  autoPopulateDependentKeys: boolean;
}

export interface AsProperties {
  n?: Ackstatus;
  pi?: Pi;
  aa?: Batchen;
  na?: Ackstatus;
  b?: Ad;
  are_the?: Ad;
  is_th?: Addi;
  are_th?: Ad;
  tow?: Addi;
  is_the_?: Addi;
  is_the_t?: Addi;
  has?: Addi;
  is_the_tr?: Addi;
  wh?: Addi;
  in_?: Addi;
  in_c?: Addi;
  is_the_a?: Addi;
  who?: Addi;
  to?: Addi;
  are_the_?: Ad;
  please_wr?: Ackstatus;
  please_write_de?: Batchen;
  please_write_det?: Ackstatus;
  please_write_deta?: Batchen;
  please_write_detai?: Batchen;
  please_write_detail?: Batchen;
  va?: Batchen;
  are_a?: Ad;
  doe?: Ad;
  h?: H;
}

export interface H {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: IndecentProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  autoPopulateDependentKeys: boolean;
}

export interface IndecentProperties {
  what: Ackstatus;
  is_the: Addi;
  what_: Ackstatus;
  what_a: Ackstatus;
  is_the_: Addi;
  ho: Batchen;
}

export interface At {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: AtProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  autoPopulateDependentKeys: boolean;
}

export interface AtProperties {
  ar?: Ad;
  h?: Ad;
  pl?: Batchen;
  is?: Ad;
  is_?: Ad;
  is_t?: Ad;
}

export interface Attp {
  title: string;
  type: AttpType;
  description: IMDescription;
  items?: PropertiesItems;
  newRowLabel?: string;
  filterOnConditionPojo: boolean;
  multimediaType: MultimediaType;
  disableFilepicker: boolean;
  enableGeoTagging: boolean;
  accessMatrix: AttpAccessMatrix;
  maxRows?: number;
  properties?: IMProperties;
}

export enum AttpType {
  Array = 'array',
  Object = 'object',
  String = 'string',
}

export interface Au {
  title: string;
  type: AttpType;
  description: TypeEnum;
  properties?: AuProperties;
  filterOnConditionPojo?: boolean;
  accessMatrix?: AdAccessMatrix;
  pickManually?: boolean;
  autoPopulateDependentKeys?: boolean;
  enum?: string[];
  items?: AddressClass;
  predicates?: BatchenPredicate[];
  scoringConfigs?: AdScoringConfigs;
  layout?: Layout;
  hint?: string;
  populateMasterDataInServer?: boolean;
}

export interface AuProperties {
  address: AddressClass;
  lonlat: AddressClass;
}

export interface Ba {
  title: string;
  type: AddressType;
  description: TypeEnum;
  filterOnConditionPojo: boolean;
  columnName: string;
  columnKey: string;
  predicates?: AbcdPredicate[];
  accessMatrix?: BaAccessMatrix;
  autoPopulateDependentKeys?: boolean;
}

export interface BaAccessMatrix {
  readOnly: boolean;
  viewModeVisibility?: Visibility;
  visibility: Visibility;
  mandatory?: boolean;
}

export interface BatchS {
  title: string;
  type: AddressType;
  description: BatchSDescription;
  filterOnConditionPojo: boolean;
  columnName: string;
  columnKey: string;
  format?: string;
  timeUnit?: TimeUnit;
  accessMatrix: BatchSAccessMatrix;
  predicates?: AckstatusPredicate[];
  autoPopulateDependentKeys?: boolean;
  populateMasterDataInServer?: boolean;
}

export interface BatchSAccessMatrix {
  readOnly: boolean;
}

export interface Bsinf {
  title: string;
  type: AddressType;
  description: TypeEnum;
  items: BsinfItems;
  newRowLabel: string;
  searchableKeys: string[];
  masterId: string;
  filterOnConditionPojo: boolean;
  masterName: string;
  masterType: string;
  maxRows: number;
  minRows: number;
  predicates: AckstatusPredicate[];
  autoPopulateDependentKeys: boolean;
  populateMasterDataInServer: boolean;
}

export interface BsinfItems {
  type: IMType;
  properties: HilariousProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  autoPopulateDependentKeys: boolean;
  populateMasterDataInServer: boolean;
}

export interface HilariousProperties {
  batchid: Oj;
  bsd1: BatchS;
  bed1: Oj;
  bst: BatchS;
  bet: Oj;
  enrollcan: Oj;
  availbat: Batchen;
}

export interface Oj {
  title: string;
  type: AddressType;
  description: BatchSDescription;
  filterOnConditionPojo: boolean;
  columnName: string;
  columnKey: string;
  predicates?: AckstatusPredicate[];
  autoPopulateDependentKeys?: boolean;
  populateMasterDataInServer?: boolean;
  format?: Format;
  timeUnit?: TimeUnit;
  accessMatrix?: AdAccessMatrix;
  masterName?: string;
  masterType?: string;
}

export interface C {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: AuProperties;
  filterOnConditionPojo?: boolean;
  accessMatrix?: AttpAccessMatrix;
  autoPopulateDependentKeys?: boolean;
}

export interface CA {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: CAProperties;
  required?: any[];
  filterOnConditionPojo?: boolean;
  order?: string[];
  predicates?: CanPredicate[];
  autoPopulateDependentKeys?: boolean;
}

export interface CAProperties {
  ar?: Ad;
  are: Ad;
  are_: Ad;
  d?: Ad;
  h?: Ad;
  are_t: Ad;
  ha?: Ad;
  di?: Ad;
  are_th?: Ad;
  doe?: Ad;
  hav?: Ad;
  are_the?: Ad;
  ple?: Ackstatus;
  plea?: Ackstatus;
  pleas?: Ackstatus;
  please_wri?: Ackstatus;
  please_writ?: Ackstatus;
  please_write?: Batchen;
  please_write_?: Batchen;
  please_write_d?: Batchen;
  w?: Batchen;
  wh?: Batchen;
}

export interface Cent {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: CentProperties;
  required: string[];
  searchableKeys: string[];
  masterId: string;
  filterOnConditionPojo: boolean;
  masterName: string;
  masterType: string;
  order: string[];
  autoPopulateDependentKeys: boolean;
}

export interface CentProperties {
  s: Oj;
  p: Oj;
  l: Oj;
  lo: Oj;
  loc_state: Oj;
  loc_dis: Oj;
}

export interface Covid {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: CovidProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: CovidOrder[];
  autoPopulateDependentKeys: boolean;
}

export enum CovidOrder {
  Five = 'five',
  Four = 'four',
  One = 'one',
  Three = 'three',
  Two = 'two',
}

export interface CovidProperties {
  one: Addi;
  two: Addi;
  three: Addi;
  four: Addi;
  five: Batchen;
}

export interface D {
  title: string;
  type: AddressType;
  description: string;
  filterOnConditionPojo: boolean;
  predicates?: AckstatusPredicate[];
  autoPopulateDependentKeys?: boolean;
  enum?: ValueElement[];
  dateOnly?: boolean;
  timeOnly?: boolean;
  systemTime?: boolean;
  format?: string;
  accessMatrix?: AttpAccessMatrix;
}

export interface Dim {
  title: string;
  type: AddressType;
  description: TypeEnum;
  filterOnConditionPojo: boolean;
  predicates?: AbcdPredicate[];
  accessMatrix?: AttpAccessMatrix;
  autoPopulateDependentKeys?: boolean;
}

export interface Doc {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: DocProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  predicates: AckstatusPredicate[];
  autoPopulateDependentKeys: boolean;
}

export interface DocProperties {
  p: Au;
  a: IM;
  aebas: Au;
  h: Au;
  ar: Ad;
}

export interface Fa {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: FaProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  autoPopulateDependentKeys: boolean;
}

export interface FaProperties {
  are_th: Ad;
  wha: Dim;
}

export interface Fe {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: FeProperties;
  required?: any[];
  filterOnConditionPojo: boolean;
  order?: string[];
  autoPopulateDependentKeys?: boolean;
  accessMatrix?: AttpAccessMatrix;
}

export interface FeProperties {
  what_d: Au;
  what_do: Au;
  does: Ad;
}

export interface Imact {
  title: string;
  type: IMType;
  description: IMDescription;
  properties: IMProperties;
  hint: string;
  filterOnConditionPojo: boolean;
  predicates: AckstatusPredicate[];
  multimediaType: MultimediaType;
  disableFilepicker: boolean;
}

export interface Infra {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: InfraProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: string[];
  predicates: AckstatusPredicate[];
  autoPopulateDependentKeys: boolean;
  layout?: Layout;
}

export interface InfraProperties {
  t: Addi;
  i: Au;
  n: N;
  nu: N;
  a: Ad;
  p: Addi;
  av: Ad;
  iscct: Ad;
  imact: IM;
  reast: Batchen;
  ava: Au;
  pl: Addi;
  ov: Addi;
  ai: Ad;
  c: Au;
}

export interface N {
  title: string;
  type: TypeEnum;
  description: string;
  filterOnConditionPojo: boolean;
  maximum: number;
  minimum: number;
  autoPopulateDependentKeys: boolean;
}

export interface O {
  title: string;
  type: IMType;
  description: TypeEnum;
  filterOnConditionPojo?: boolean;
  autoPopulateDependentKeys?: boolean;
  properties?: OProperties;
  required?: any[];
  order?: string[];
  accessMatrix?: AttpAccessMatrix;
}

export interface OProperties {
  is_th: Au;
  is_the: Au;
  w: Au;
  is_tr: Au;
  please: Au;
  please_: Au;
  please_w: Au;
}

export interface Or {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: OrProperties;
  required?: any[];
  filterOnConditionPojo?: boolean;
  order?: string[];
  predicates?: CanPredicate[];
  autoPopulateDependentKeys?: boolean;
}

export interface OrProperties {
  are_the_: Batchen;
  are_tr: Batchen;
  aad: Batchen;
  w: Batchen;
  is_the_: Batchen;
  is_tr: Batchen;
}

export interface Ph {
  title: string;
  type: AttpType;
  description: string;
  properties?: PhProperties;
  filterOnConditionPojo: boolean;
  maxSize?: number;
  minSize?: number;
  multimediaType?: MultimediaType;
  disableFilepicker?: boolean;
  autoPopulateDependentKeys?: boolean;
  items?: PhItems;
  newRowLabel?: string;
  enableGeoTagging?: boolean;
  accessMatrix?: AttpAccessMatrix;
}

export interface PhItems {
  type: IMType;
  filterOnConditionPojo: boolean;
  autoPopulateDependentKeys?: boolean;
  properties?: AmbitiousProperties;
  required?: any[];
  order?: string[];
}

export interface AmbitiousProperties {
  im: Pi;
}

export interface PhProperties {
  thumbnail: AddressClass;
  size: AddressClass;
  name: AddressClass;
  caption: AddressClass;
  contentType: AddressClass;
  url: AddressClass;
}

export interface Pho {
  title: string;
  type: AttpType;
  description: string;
  properties?: PhProperties;
  filterOnConditionPojo: boolean;
  maxSize?: number;
  minSize?: number;
  predicates?: AckstatusPredicate[];
  multimediaType?: MultimediaType;
  disableFilepicker?: boolean;
  autoPopulateDependentKeys: boolean;
  items?: PhoItems;
}

export interface PhoItems {
  type: IMType;
  filterOnConditionPojo: boolean;
  autoPopulateDependentKeys: boolean;
  properties?: CunningProperties;
  required?: any[];
  order?: string[];
}

export interface CunningProperties {
  ima: Pi;
}

export interface Rep {
  title: string;
  type: AddressType;
  description: TypeEnum;
  items: RepItems;
  newRowLabel: string;
  searchableKeys: any[];
  filterOnConditionPojo: boolean;
  accessMatrix: AbcdAccessMatrix;
}

export interface RepItems {
  type: IMType;
  properties: MagentaProperties;
  required: string[];
  filterOnConditionPojo: boolean;
  order: string[];
}

export interface MagentaProperties {
  repr: Addit;
  repre: Ackstatus;
  phi: Attp;
}

export interface S {
  title: string;
  type: AddressType;
  description: TypeEnum;
  items?: AddressClass;
  filterOnConditionPojo: boolean;
  predicates?: AckstatusPredicate[];
  autoPopulateDependentKeys?: boolean;
  enum?: string[];
  accessMatrix?: AttpAccessMatrix;
  localisationMap?: LocalisationMap;
  enumListLocalisationMap?: SEnumListLocalisationMap;
  scoringConfigs?: AdScoringConfigs;
}

export interface SEnumListLocalisationMap {
  'Special Projects': LocalisationMap;
}

export interface LocalisationMap {}

export interface T {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: TProperties;
  required?: string[];
  searchableKeys?: string[];
  masterId?: string;
  filterOnConditionPojo?: boolean;
  masterName?: string;
  masterType?: string;
  order?: string[];
  autoPopulateDependentKeys?: boolean;
  layout?: Layout;
  enum?: string[];
}

export interface TProperties {
  t: Ba;
  tr: Ba;
  tra: Ba;
  a: Ba;
  d: Ba;
  s: Ba;
}

export interface Tcld {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: TcldProperties;
  required: any[];
  searchableKeys: string[];
  masterId: string;
  filterOnConditionPojo: boolean;
  masterName: string;
  order: string[];
  accessMatrix: AbcdAccessMatrix;
}

export interface TcldProperties {
  tcl: Tcl;
  tclat: Batchen;
  tclong: Oj;
  curlat: Au;
  curlong: Batchen;
  tcsource: Oj;
}

export interface Tcl {
  title: string;
  type: AddressType;
  description: TypeEnum;
  masterId: string;
  filterOnConditionPojo: boolean;
  masterName: string;
  columnName: string;
  columnKey: string;
  masterType: string;
  predicates: TclPredicate[];
  accessMatrix: TclAccessMatrix;
}

export interface TclAccessMatrix {
  mandatory: boolean;
  readOnly: boolean;
}

export interface TclPredicate {
  action: string;
  actionConfig: StickyActionConfig;
}

export interface StickyActionConfig {
  field: string;
  optionFilterForMultipleKeys: boolean;
}

export interface Tcsource1 {
  title: string;
  type: AddressType;
  description: TypeEnum;
  filterOnConditionPojo: boolean;
  masterType: string;
  accessMatrix: AttpAccessMatrix;
}

export interface Tr {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: TrProperties;
  required?: any[];
  filterOnConditionPojo: boolean;
  order?: string[];
  predicates?: AckstatusPredicate[];
  autoPopulateDependentKeys?: boolean;
  accessMatrix?: AttpAccessMatrix;
  localisationMap?: LocalisationMap;
  enumListLocalisationMap?: TrEnumListLocalisationMap;
  enum?: string[];
  layout?: Layout;
}

export interface TrEnumListLocalisationMap {
  OJT: LocalisationMap;
}

export interface TrProperties {
  n: Addit;
  nu: Addit;
  num: Addit;
  p: Ad;
  ni: Ad;
  i: IM;
}

export interface U {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: UProperties;
  required: any[];
  filterOnConditionPojo: boolean;
  order: UOrder[];
  predicates: AckstatusPredicate[];
  autoPopulateDependentKeys: boolean;
  layout?: Layout;
}

export enum UOrder {
  D = 'd',
  M = 'm',
  N = 'n',
}

export interface UProperties {
  n: Addit;
  d: Addit;
  m: Addit;
}

export interface V {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties?: VProperties;
  required?: any[];
  order?: string[];
  filterOnConditionPojo?: boolean;
  sortOptions?: boolean;
  autoPopulateDependentKeys?: boolean;
  enum?: string[];
}

export interface VProperties {
  was: Can;
  di: Can;
  is_: Can;
  is_t: Can;
  is_th: Can;
}

export interface Ve {
  title: string;
  type: IMType;
  description: TypeEnum;
  properties: VeProperties;
  required: any[];
  order: string[];
  predicates: CanPredicate[];
}

export interface VeProperties {
  was_: Ackstatus;
  did: Ackstatus;
  did_: Ackstatus;
  did_t: Ackstatus;
  did_th: Ackstatus;
}

export interface SchemaScoringConfigs {
  s1: FluffyS1;
}

export interface FluffyS1 {
  title: string;
  aggregation: string;
}
