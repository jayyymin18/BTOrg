/*!
 *
 * Bryntum Gantt 5.6.10 (TRIAL VERSION)
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(d,l){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var u=l(),g=s?exports:d;for(var m in u)g[m]=u[m]}})(typeof self<"u"?self:void 0,()=>{var d={},l={exports:d},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,v=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})},h=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of g(t))!m.call(e,n)&&n!==a&&s(e,n,{get:()=>t[n],enumerable:!(o=u(t,n))||o.enumerable});return e},C=e=>h(s({},"__esModule",{value:!0}),e),f=(e,t,a)=>(v(e,typeof t!="symbol"?t+"":t,a),a),y={};D(y,{default:()=>N}),l.exports=C(y);var i=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,b=class p{static mergeLocales(...t){let a={};return t.forEach(o=>{Object.keys(o).forEach(n=>{typeof o[n]=="object"?a[n]={...a[n],...o[n]}:a[n]=o[n]})}),a}static trimLocale(t,a){let o=(n,r)=>{t[n]&&(r?t[n][r]&&delete t[n][r]:delete t[n])};Object.keys(a).forEach(n=>{Object.keys(a[n]).length>0?Object.keys(a[n]).forEach(r=>o(n,r)):o(n)})}static normalizeLocale(t,a){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=t||a.name:a.localeName=t}else a=t;let o={};if(a.name||a.locale)o=Object.assign({localeName:a.name},a.locale),a.desc&&(o.localeDesc=a.desc),a.code&&(o.localeCode=a.code),a.path&&(o.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);o=Object.assign({},a)}for(let n of["name","desc","code","path"])o[n]&&delete o[n];if(!o.localeName)throw new Error("Locale name can not be empty");return o}static get locales(){return i.bryntum.locales||{}}static set locales(t){i.bryntum.locales=t}static get localeName(){return i.bryntum.locale||"En"}static set localeName(t){i.bryntum.locale=t||p.localeName}static get locale(){return p.localeName&&this.locales[p.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,a){let{locales:o}=i.bryntum,n=p.normalizeLocale(t,a),{localeName:r}=n;return!o[r]||a===!0?o[r]=n:o[r]=this.mergeLocales(o[r]||{},n||{}),o[r]}};f(b,"skipLocaleIntegrityCheck",!1);var c=b;i.bryntum=i.bryntum||{},i.bryntum.locales=i.bryntum.locales||{},c._$name="LocaleHelper";var T={localeName:"Bg",localeDesc:"Български",localeCode:"bg",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Премахване на зависимост"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Деактивиране на зависимост"},CycleEffectDescription:{descriptionTpl:"Открит е цикъл, формиран от: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" календарът не предоставя интервали от време за работа.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Използвайте 24-часов календар с неработни съботи и недели."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Използвайте 8-часов календар (08:00-12:00, 13:00-17:00) с неработни съботи и недели."},IgnoreProjectConstraintResolution:{descriptionTpl:"Игнорирайте границата на проекта и продължете с промяната."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Преместихте задача "{0}" да започнете {1}. Това е преди началната дата на проекта {2}.',endDescriptionTpl:'Преместихте задача "{0}" да завършите {1}. Това е след крайната дата на проекта {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Коригирайте задачата, за да почетете границата на проекта."},ConflictEffectDescription:{descriptionTpl:"Открит е конфликт в графика: {0} е в конфликт с {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Начална дата на проекта {0}",endDateDescriptionTpl:"Крайна дата на проекта {0}"},DependencyType:{long:["От начало до начало","От начало до край","От край до начало","От край до край"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Ръчно планираният "{2}" принуждава децата си да започват не по-рано от {0}',endDescriptionTpl:'Ръчно планираното "{2}" принуждава децата си да приключат не по-късно от {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Деактивиране на ръчното планиране за "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Зависимост ({2}) от "{3}" към "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Премахване на зависимостта от "{1}" към "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Деактивиране на зависимостта от "{1}" към "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Задача "{2}" {3} {0} ограничение',endDateDescriptionTpl:'Задача "{2}" {3} {1} ограничение',constraintTypeTpl:{startnoearlierthan:"Начало не по-рано от",finishnoearlierthan:"Край не по-рано от",muststarton:"Трябва да започне на",mustfinishon:"Трябва да свърши на",startnolaterthan:"Начало не по-късно от",finishnolaterthan:"Край не по-късно от"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Премахване на ограничението "{1}" на задачата "{0}"'}},x=c.publishLocale(T),E={localeName:"Bg",localeDesc:"Български",localeCode:"bg",Object:{Yes:"Да",No:"Не",Cancel:"Отказ",Ok:"ОК",Week:"Седмица",None:"Няма"},ColorPicker:{noColor:"Няма цвят"},Combo:{noResults:"Няма резултати",recordNotCommitted:"Записът не може да бъде добавен",addNewValue:e=>`Добавете ${e}`},FilePicker:{file:"Файл"},Field:{badInput:"Невалидна стойност на полето",patternMismatch:"Стойността трябва да съответства на определен шаблон",rangeOverflow:e=>`Стойността трябва да е по-малка или равна на ${e.max}`,rangeUnderflow:e=>`Стойността трябва да е по-голяма или равна на ${e.min}`,stepMismatch:"Стойността трябва да съответства на стъпката",tooLong:"Стойността трябва да е по-къса",tooShort:"Стойността трябва да е по-дълга",typeMismatch:"Стойността трябва да бъде в специален формат",valueMissing:"Това поле е задължително",invalidValue:"Невалидна стойност на полето",minimumValueViolation:"Нарушение на минималната стойност",maximumValueViolation:"Нарушение на максималната стойност",fieldRequired:"Това поле е задължително",validateFilter:"Стойността трябва да бъде избрана от списъка"},DateField:{invalidDate:"Невалидно въвеждане на дата"},DatePicker:{gotoPrevYear:"Преминаване към предишната година",gotoPrevMonth:"Преминаване към предишния месец",gotoNextMonth:"Преминаване към следващия месец",gotoNextYear:"Преминаване към следващата година"},NumberFormat:{locale:"bg",currency:"BGN"},DurationField:{invalidUnit:"Невалидна единица"},TimeField:{invalidTime:"Невалидно въведено време"},TimePicker:{hour:"Час",minute:"Минута",second:"Секунда"},List:{loading:"Зареждане...",selectAll:"Избери всички"},GridBase:{loadMask:"Зареждане...",syncMask:"Запазване на промените, моля, изчакайте..."},PagingToolbar:{firstPage:"Преминаване на първа страница",prevPage:"Преминаване на предишната страница",page:"Стр.",nextPage:"Преминаване на следващата страница",lastPage:"Преминаване на последната страница",reload:"Презареждане на текущата страница",noRecords:"Няма записи за показване",pageCountTemplate:e=>`от ${e.lastPage}`,summaryTemplate:e=>`Показване на записи ${e.start} - ${e.end} от ${e.allCount}`},PanelCollapser:{Collapse:"Свиване",Expand:"Разгръщане"},Popup:{close:"Затваряне на изскачащ прозорец"},UndoRedo:{Undo:"Отмяна",Redo:"Повтаряне",UndoLastAction:"Отмяна на последното действие",RedoLastAction:"Повторно извършване на последното отменено действие",NoActions:"Няма елементи в опашката за отмяна"},FieldFilterPicker:{equals:"е равно на",doesNotEqual:"не е равно на",isEmpty:"е празно",isNotEmpty:"не е празно",contains:"съдържа",doesNotContain:"не съдържа",startsWith:"започва с",endsWith:"свършва с",isOneOf:"е част от",isNotOneOf:"не е част от",isGreaterThan:"е по-голямо от",isLessThan:"е по-малко от",isGreaterThanOrEqualTo:"е по-голямо от или равно на",isLessThanOrEqualTo:"е по-малко от или равно на",isBetween:"е между",isNotBetween:"не е между",isBefore:"е преди",isAfter:"е след",isToday:"е днес",isTomorrow:"е утре",isYesterday:"е вчера",isThisWeek:"е тази седмица",isNextWeek:"е следващата седмица",isLastWeek:"е миналата седмица",isThisMonth:"е този месец",isNextMonth:"е следващият месец",isLastMonth:"е миналият месец",isThisYear:"е тази година",isNextYear:"е следващата година",isLastYear:"е миналата година",isYearToDate:"е от началото на годината до днес",isTrue:"е вярно",isFalse:"е грешно",selectAProperty:"Избор на свойство",selectAnOperator:"Избор на оператор",caseSensitive:"Чувствителност към малки и големи букви",and:"и",dateFormat:"D/M/YY",selectValue:"Изберете стойност",selectOneOrMoreValues:"Избор на една или повече стойности",enterAValue:"Въвеждане на стойност",enterANumber:"Въвеждане на число",selectADate:"Избор на дата",selectATime:"Изберете час"},FieldFilterPickerGroup:{addFilter:"Добавяне на филтър"},DateHelper:{locale:"bg",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"милисекунда",plural:"милисекунди",abbrev:"мсек"},{single:"секунда",plural:"секунди",abbrev:"сек"},{single:"минута",plural:"минути",abbrev:"мин"},{single:"час",plural:"часа",abbrev:"ч"},{single:"ден",plural:"дни",abbrev:"д"},{single:"седмица",plural:"седмици",abbrev:"сед"},{single:"месец",plural:"месеци",abbrev:"мес"},{single:"тримесечие",plural:"тримесечия",abbrev:"трим"},{single:"година",plural:"години",abbrev:"год"},{single:"десетилетие",plural:"десетилетия",abbrev:"десетил"}],unitAbbreviations:[["милисек"],["с","сек"],["м","мин"],["ч","часа"],["д"],["с","сед"],["ме","мес","мсц"],["тр","трим","тримес"],["г","год"],["дес"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let t=e[e.length-1],a={1:"-во",2:"-ро",3:"-то"}[t]||"-ти";return e+a}}},F=c.publishLocale(E),S=new String,k={localeName:"Bg",localeDesc:"Български",localeCode:"bg",ColumnPicker:{column:"Колона",columnsMenu:"Колони",hideColumn:"Скриване на колона",hideColumnShort:"Скриване",newColumns:"Нова колона"},Filter:{applyFilter:"Прилагане на филтър",filter:"Филтри",editFilter:"Редактиране на филтър",on:"Вкл.",before:"Преди",after:"След",equals:"Равно",lessThan:"По-малко от",moreThan:"Повече от",removeFilter:"Премахване на филтър",disableFilter:"Деактивиране на филтъра"},FilterBar:{enableFilterBar:"Показване на лентата с филтри",disableFilterBar:"Скриване на лентата с филтри"},Group:{group:"Група",groupAscending:"Възходяща група",groupDescending:"Низходящ група",groupAscendingShort:"Възходящ",groupDescendingShort:"Низходящ",stopGrouping:"Стоп на групиране",stopGroupingShort:"Стоп"},HeaderMenu:{moveBefore:e=>`Преместване преди "${e}"`,moveAfter:e=>`Преместване след "${e}"`,collapseColumn:"Свиване на колона",expandColumn:"Разширяване на колона"},ColumnRename:{rename:"Преименуване"},MergeCells:{mergeCells:"Сливане на клетки",menuTooltip:"Сливане на клетки с една и съща стойност при сортиране по тази колона"},Search:{searchForValue:"Търсене на стойност"},Sort:{sort:"Сортиране",sortAscending:"Сортиране във възходящ ред",sortDescending:"Сортиране в низходящ ред",multiSort:"Мулти сортиране",removeSorter:"Премахване на сортировач",addSortAscending:"Добавяне на възходящ сортировач",addSortDescending:"Добавяне на низходящ сортировач",toggleSortAscending:"Промяна към възходящ",toggleSortDescending:"Промяна към низходящ",sortAscendingShort:"Възходящ",sortDescendingShort:"Низходящ",removeSorterShort:"Отстраняване",addSortAscendingShort:"+ Възходящ",addSortDescendingShort:"+ Низходящ"},Split:{split:"Разделено",unsplit:"Неразделено",horizontally:"Хоризонтално",vertically:"Вертикално",both:"И двете"},Column:{columnLabel:e=>`${e.text?`${e.text} колона. `:""}SPACE за контекстно меню${e.sortable?", ENTER за сортиране":""}`,cellLabel:S},Checkbox:{toggleRowSelect:"Превключване на избора на ред",toggleSelection:"Превключване на избора на целия набор от данни"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`рейтинг : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Неуспешно зареждане на данни!",syncFailedMessage:"Неуспешна синхронизация за данни!",unspecifiedFailure:"Неуточнена неизправност",networkFailure:"Грешка в мрежата",parseFailure:"Неуспешен анализ на отговора на сървъра",serverResponse:"Отговор на сървъра:",noRows:"Няма записи за показване",moveColumnLeft:"Преместване в лявата част",moveColumnRight:"Преместване в дясната част",moveColumnTo:e=>`Преместване на колоната в ${e}`},CellMenu:{removeRow:"Изтриване"},RowCopyPaste:{copyRecord:"Копирай",cutRecord:"Изрежи",pasteRecord:"Постави",rows:"редове",row:"ред"},CellCopyPaste:{copy:"Копиране",cut:"Изрязване",paste:"Вмъкване"},PdfExport:{"Waiting for response from server":"В очакване на отговор от сървъра...","Export failed":"Неуспешен експорт","Server error":"Грешка в сървъра","Generating pages":"Генериране на страници...","Click to abort":"Отказ"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Настройки на експорта",export:"Експорт",printSettings:"Настройки за печат",print:"Печат",exporterType:"Контрол на странирането",cancel:"Отказ",fileFormat:"Файлов формат",rows:"Редове",alignRows:"Подравняване на редовете",columns:"Колони",paperFormat:"Формат на документа",orientation:"Ориентация",repeatHeader:"Повтаряне на заглавката"},ExportRowsCombo:{all:"Всички редове",visible:"Видими редове"},ExportOrientationCombo:{portrait:"Портрет",landscape:"Пейзаж"},SinglePageExporter:{singlepage:"Единична страница"},MultiPageExporter:{multipage:"Няколко страници",exportingPage:({currentPage:e,totalPages:t})=>`Експортиране на страница ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Няколко страници (вертикално)",exportingPage:({currentPage:e,totalPages:t})=>`Експортиране на страница ${e}/${t}`},RowExpander:{loading:"Зареждане",expand:"Разгръщане",collapse:"Свиване"},TreeGroup:{group:"Групиране по",stopGrouping:"Спиране на групирането",stopGroupingThisColumn:"Разгрупиране на колона"}},A=c.publishLocale(k),R={localeName:"Bg",localeDesc:"Български",localeCode:"bg",Object:{newEvent:"Ново събитие"},ResourceInfoColumn:{eventCountText:e=>e+" събити"+(e!==1?"я":"е")},Dependencies:{from:"От",to:"До",valid:"Валидно",invalid:"Невалидно"},DependencyType:{SS:"НН",SF:"НК",FS:"КН",FF:"КК",StartToStart:"От начало до начало",StartToEnd:"От начало до край",EndToStart:"От край до начало",EndToEnd:"От край до край",short:["НН","НК","КН","КК"],long:["От начало до начало","От начало до край","От край до начало","От край до край"]},DependencyEdit:{From:"От",To:"До",Type:"Тип",Lag:"Забавяне","Edit dependency":"Редактиране на зависимостта",Save:"Запис",Delete:"Изтриване",Cancel:"Отказ",StartToStart:"От начало до начало",StartToEnd:"От начало до край",EndToStart:"От край до начало",EndToEnd:"От край до край"},EventEdit:{Name:"Име",Resource:"Ресурс",Start:"Начало",End:"Край",Save:"Запис",Delete:"Изтриване",Cancel:"Отказ","Edit event":"Редактиране на събитие",Repeat:"Повторение"},EventDrag:{eventOverlapsExisting:"Събитието се припокрива със съществуващо събитие за този ресурс",noDropOutsideTimeline:"Събитието не може да бъде изхвърлено изцяло извън времевата линия"},SchedulerBase:{"Add event":"Добавяне на събитие","Delete event":"Изтриване на събитие","Unassign event":"Отмяна на събитието",color:"цвят"},TimeAxisHeaderMenu:{pickZoomLevel:"Мащабиране",activeDateRange:"Диапазон на датите",startText:"Начална дата",endText:"Крайна дата",todayText:"Днес"},EventCopyPaste:{copyEvent:"Събитие за копиране",cutEvent:"Прекъсване на събитието",pasteEvent:"Събитие за вмъкване"},EventFilter:{filterEvents:"Задачи за филтриране",byName:"По име"},TimeRanges:{showCurrentTimeLine:"Показване на текуша хронология"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Секунди"},minuteAndHour:{topDateFormat:"ddd DD.MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD.MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Ден"},day:{name:"Ден/часа"},week:{name:"Седмица/часа"},dayAndWeek:{displayDateFormat:"ll LST",name:"Седмица/дни"},dayAndMonth:{name:"Месец"},weekAndDay:{displayDateFormat:"ll LST",name:"Седмица"},weekAndMonth:{name:"Седмици"},weekAndDayLetter:{name:"Седмици/делници"},weekDateAndMonth:{name:"Месеци/седмици"},monthAndYear:{name:"Месеци"},year:{name:"Години"},manyYears:{name:"Много години"}},RecurrenceConfirmationPopup:{"delete-title":"Вие изтривате събитие","delete-all-message":"Искате ли да изтриете всички повторения на това събитие?","delete-further-message":"Искате ли да изтриете това и всички бъдещи повторения на това събитие, или само избраното повторение?","delete-further-btn-text":"Изтриване на всички бъдещи събития","delete-only-this-btn-text":"Изтриване само на това събитие","update-title":"Променяте повтарящо се събитие","update-all-message":"Искате ли промяна на всички повторения на това събитие?","update-further-message":"Искате ли да промените само това повторение на събитието или тази и всички бъдещи повторения?","update-further-btn-text":"Всички бъдещи събития","update-only-this-btn-text":"Само това събитие",Yes:"Да",Cancel:"Отказ",width:600},RecurrenceLegend:{" and ":" и ",Daily:"Ежедневно","Weekly on {1}":({days:e})=>`Ежеседмично на ${e}`,"Monthly on {1}":({days:e})=>`Ежемесечно на ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Ежегодно на ${e} на ${t}`,"Every {0} days":({interval:e})=>`На всеки ${e} дни`,"Every {0} weeks on {1}":({interval:e,days:t})=>`На всеки ${e} седмици на ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`На всеки ${e} месеца на ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`На всеки ${e} години на ${t} от ${a}`,position1:"първия",position2:"втория",position3:"третия",position4:"четвъртия",position5:"петия","position-1":"последния",day:"дни",weekday:"ден от седмицата","weekend day":"ден от уикенда",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Повтаряне на събития",Cancel:"Отказ",Save:"Запис",Frequency:"Честота",Every:"Всеки",DAILYintervalUnit:"ден(дни)",WEEKLYintervalUnit:"седмица(и)",MONTHLYintervalUnit:"месец(и)",YEARLYintervalUnit:"година(и)",Each:"Всеки","On the":"На","End repeat":"Край на повторението","time(s)":"път(и)"},RecurrenceDaysCombo:{day:"ден",weekday:"ден от седмицата","weekend day":"ден от уикенда"},RecurrencePositionsCombo:{position1:"първи",position2:"втори",position3:"трети",position4:"четвърти",position5:"пети","position-1":"последния"},RecurrenceStopConditionCombo:{Never:"Никога",After:"След","On date":"На дата"},RecurrenceFrequencyCombo:{None:"Без повторение",Daily:"Ежедневно",Weekly:"Ежеседмично",Monthly:"Ежемесечно",Yearly:"Ежегодно"},RecurrenceCombo:{None:"Няма",Custom:"Потребителски..."},Summary:{"Summary for":e=>`Резюме за ${e}`},ScheduleRangeCombo:{completeview:"Пълен график",currentview:"Видим график",daterange:"Диапазон на датите",completedata:"Пълен график (за всички събития)"},SchedulerExportDialog:{"Schedule range":"Диапазон на графика","Export from":"От","Export to":"До"},ExcelExporter:{"No resource assigned":"Няма назначен ресурс"},CrudManagerView:{serverResponseLabel:"Отговор на сървъра:"},DurationColumn:{Duration:"Продължителност"}},L=c.publishLocale(R),P={localeName:"Bg",localeDesc:"Български",localeCode:"bg",ConstraintTypePicker:{none:"Няма",assoonaspossible:"Възможно най-скоро",aslateaspossible:"Възможно най-късно",muststarton:"Трябва да започне на",mustfinishon:"Трябва да свърши на",startnoearlierthan:"Начало не по-рано от",startnolaterthan:"Начало не по-късно от",finishnoearlierthan:"Край не по-рано от",finishnolaterthan:"Край не по-късно от"},SchedulingDirectionPicker:{Forward:"Напред",Backward:"Назад",inheritedFrom:"Наследени от",enforcedBy:"Наложени от"},CalendarField:{"Default calendar":"Календар по подразбиране"},TaskEditorBase:{Information:"Информация",Save:"Запис",Cancel:"Отказ",Delete:"Изтриване",calculateMask:"Изчисляване...",saveError:"Невъзможен запис, моля, първо коригирайте грешките",repeatingInfo:"Преглед на повтарящо се събитие",editRepeating:"Редактиране"},TaskEdit:{editEvent:"Редактиране на събитие",ConfirmDeletionTitle:"Потвърждаване на изтриване",ConfirmDeletionMessage:"Сигурни ли сте, че желаете да изтриете събитието?"},GanttTaskEditor:{editorWidth:"50em"},SchedulerTaskEditor:{editorWidth:"35em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Обща информация",Name:"Име",Resources:"Ресурси","% complete":"% завършени",Duration:"Продължителност",Start:"Старт",Finish:"Край",Effort:"Усилие",Preamble:"Увод",Postamble:"Послеслов"},GeneralTab:{labelWidth:"6.5em",General:"Обща информация",Name:"Име","% complete":"% завършени",Duration:"Продължителност",Start:"Начало",Finish:"Край",Effort:"Усилие",Dates:"Дати"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Разширени",Calendar:"Календар","Scheduling mode":"Режим на планиране","Effort driven":"Effort driven","Manually scheduled":"Ръчно планирано","Constraint type":"Тип ограничение","Constraint date":"Дата на ограничението",Inactive:"Неактивен","Ignore resource calendar":"Игнориране на ресурсния календар"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Разширени",Calendar:"Календар","Scheduling mode":"Режим на планиране","Effort driven":"Effort driven","Manually scheduled":"Ръчно планирано","Constraint type":"Тип ограничение","Constraint date":"Дата на ограничението",Constraint:"Ограничение",Rollup:"Сводка",Inactive:"Неактивен","Ignore resource calendar":"Игнориране на ресурсния календар","Scheduling direction":"Насочване на графика",projectBorder:"Граница на проекта",ignore:"Игнорирайте",honor:"Чест",askUser:"Попитайте потребителя"},DependencyTab:{Predecessors:"Предшественици",Successors:"Приемници",ID:"Идентификатор",Name:"Име",Type:"Тип",Lag:"Забавяне",cyclicDependency:"Циклична зависимост",invalidDependency:"Невалидна зависимост"},NotesTab:{Notes:"Бележки"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Ресурси",Resource:"Ресурс",Units:"Единици"},RecurrenceTab:{title:"Повторение"},SchedulingModePicker:{Normal:"Нормално","Fixed Duration":"Фиксирана продължителност","Fixed Units":"Фиксирани единици","Fixed Effort":"Фиксирано усилие"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} от {available}</span> са разпределени',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} от {available}</span> са разпределени',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} от {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} от {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'На {startDate}<br><span class="{cls}">{allocated} от {available}</span> са разпределени:<br>{assignments}',plusMore:"+{value} още"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> са разпределени',barTipOnDate:'<b>{event}</b> на {startDate}<br><span class="{cls}">{allocated}</span> са разпределени',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} от {available}</span> са разпределени:<br>{assignments}',groupBarTipOnDate:'На {startDate}<br><span class="{cls}">{allocated} от {available}</span> са разпределени:<br>{assignments}',plusMore:"+{value} още",nameColumnText:"Ресурс / събитие"},SchedulingIssueResolutionPopup:{"Cancel changes":"Отмяна на промяната и не предприемай нищо",schedulingConflict:"Конфликт при планирането",emptyCalendar:"Грешка в конфигурацията на календара",cycle:"Цикъл на планиране",Apply:"Приложи"},CycleResolutionPopup:{dependencyLabel:"Моля, изберете зависимост:",invalidDependencyLabel:"Съществуват невалидни зависимости, които трябва да бъдат разгледани:"},DependencyEdit:{Active:"Активен"},SchedulerProBase:{propagating:"Изчисляване на проект",storePopulation:"Зареждане на данни...",finalizing:"Финализиране на резултатите"},EventSegments:{splitEvent:"Разделяне на събитие",renameSegment:"Преименуване"},NestedEvents:{deNestingNotAllowed:"Не е разрешено премахването",nestingNotAllowed:"Вмъкването не е разрешено"},VersionGrid:{compare:"Сравни",description:"Описание",occurredAt:"Случи се в",rename:"Преименуване",restore:"Възстановяване",stopComparing:"Прекрати сравняването"},Versions:{entityNames:{TaskModel:"задача",AssignmentModel:"възложена задача",DependencyModel:"връзка",ProjectModel:"проект",ResourceModel:"ресурс",other:"обект"},entityNamesPlural:{TaskModel:"задачи",AssignmentModel:"възложени задачи",DependencyModel:"връзки",ProjectModel:"проекти",ResourceModel:"ресурси",other:"обекти"},transactionDescriptions:{update:"Променени {n} {entities}",add:"Добавени {n} {entities}",remove:"Премахнати {n} {entities}",move:"Преместени {n} {entities}",mixed:"Променени {n} {entities}"},addEntity:"Добавено {type} **{name}**",removeEntity:"Премахнато {type} **{name}**",updateEntity:"Променено {type} **{name}**",moveEntity:"Преместено {type} **{name}** от {from} до {to}",addDependency:"Добавена е връзка от **{from}** до **{to}**",removeDependency:"Премахната е връзка от **{from}** до **{to}**",updateDependency:"Редактирана е връзка от **{from}** до **{to}**",addAssignment:"Възложен **{resource}** на **{event}**",removeAssignment:"Премахната е възложена задача от **{resource}** от **{event}**",updateAssignment:"Редактирана е възложена задача от **{resource}** от **{event}**",noChanges:"Без промяна",nullValue:"няма",versionDateFormat:"M/D/YYYY h:mm a",undid:"Неотменени промени",redid:"Повторни промени",editedTask:"Редактирани свойства на задачата",deletedTask:"Изтрита е задача",movedTask:"Преместена е задача",movedTasks:"Преместени задачи"}},O=c.publishLocale(P),M={localeName:"Bg",localeDesc:"Български",localeCode:"bg",Object:{Save:"Запис"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Игнориране на ресурсния календар"},InactiveColumn:{Inactive:"Неактивен"},AddNewColumn:{"New Column":"Нова колона"},BaselineStartDateColumn:{baselineStart:"Baseline Start"},BaselineEndDateColumn:{baselineEnd:"Baseline End"},BaselineDurationColumn:{baselineDuration:"Baseline Duration"},BaselineStartVarianceColumn:{startVariance:"Start Variance"},BaselineEndVarianceColumn:{endVariance:"End Variance"},BaselineDurationVarianceColumn:{durationVariance:"Отклонение на продължителността"},CalendarColumn:{Calendar:"Календар"},EarlyStartDateColumn:{"Early Start":"Ранен старт"},EarlyEndDateColumn:{"Early End":"Ранен край"},LateStartDateColumn:{"Late Start":"Късен старт"},LateEndDateColumn:{"Late End":"Късен край"},TotalSlackColumn:{"Total Slack":"Пълно бездействие"},ConstraintDateColumn:{"Constraint Date":"Дата на ограничението"},ConstraintTypeColumn:{"Constraint Type":"Тип ограничение"},DeadlineDateColumn:{Deadline:"Краен срок"},DependencyColumn:{"Invalid dependency":"Невалидна зависимост"},DurationColumn:{Duration:"Продължителност"},EffortColumn:{Effort:"Усилие"},EndDateColumn:{Finish:"Край"},EventModeColumn:{"Event mode":"Режим на събитие",Manual:"Ръчно",Auto:"Автоматично"},ManuallyScheduledColumn:{"Manually scheduled":"Ръчно планирано"},MilestoneColumn:{Milestone:"Ключово събитие"},NameColumn:{Name:"Име"},NoteColumn:{Note:"Забележка"},PercentDoneColumn:{"% Done":"% готови"},PredecessorColumn:{Predecessors:"Предшественици"},ResourceAssignmentColumn:{"Assigned Resources":"Присвоени ресурси","more resources":"повече ресурси"},RollupColumn:{Rollup:"Сводка"},SchedulingModeColumn:{"Scheduling Mode":"Режим на планиране"},SchedulingDirectionColumn:{schedulingDirection:"Посока на графика",inheritedFrom:"Наследени от",enforcedBy:"Наложени от"},SequenceColumn:{Sequence:"Последователност"},ShowInTimelineColumn:{"Show in timeline":"Показване в хронологията"},StartDateColumn:{Start:"Начало"},SuccessorColumn:{Successors:"Приемници"},TaskCopyPaste:{copyTask:"Копирай",cutTask:"Изрежи",pasteTask:"Постави"},WBSColumn:{WBS:"Структура на разпределение на работата",renumber:"Преномериране"},DependencyField:{invalidDependencyFormat:"Невалиден формат на зависимост"},ProjectLines:{"Project Start":"Начало на проект","Project End":"Край на проект"},TaskTooltip:{Start:"Старт",End:"Край",Duration:"Продължителност",Complete:"Приключи"},AssignmentGrid:{Name:"Име на ресурс",Units:"Единици",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Редактиране",Indent:"Увеличаване на ниво",Outdent:"Намаляване на ниво","Convert to milestone":"Преобразуване в етап",Add:"Добавяне...","New task":"Нова задача","New milestone":"Ново ключово събитие","Task above":"Задача по-горе","Task below":"Задача по-долу","Delete task":"Изтриване",Milestone:"Етап","Sub-task":"Подзадача",Successor:"Приемник",Predecessor:"Предшественик",changeRejected:"Механизмът за планиране отхвърли промените",linkTasks:"Добавяне на зависимости",unlinkTasks:"Премахване на зависимости",color:"цвят"},EventSegments:{splitTask:"Разделяне на задача"},Indicators:{earlyDates:"Ранно начало/край",lateDates:"Късно начало/край",Start:"Старт",End:"Край",deadlineDate:"Краен срок"},Versions:{indented:"С отстъп",outdented:"Без отстъп",cut:"Изрязване",pasted:"Вмъкнато",deletedTasks:"Изтрити задачи"}},N=c.publishLocale(M);if(typeof l.exports=="object"&&typeof d=="object"){var w=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,n)&&n!==a&&Object.defineProperty(e,n,{get:()=>t[n],enumerable:!(o=Object.getOwnPropertyDescriptor(t,n))||o.enumerable});return e};l.exports=w(l.exports,d)}return l.exports});
