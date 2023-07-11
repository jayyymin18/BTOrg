/*!
 *
 * Bryntum Gantt 5.3.6
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(o,r){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var d=r(),m=s?exports:o;for(var p in d)m[p]=d[p]}})(typeof self<"u"?self:void 0,()=>{var o={},r={exports:o},s=Object.defineProperty,d=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,g=(a,e,n)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,k=(a,e)=>{for(var n in e)s(a,n,{get:e[n],enumerable:!0})},h=(a,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of m(e))!p.call(a,i)&&i!==n&&s(a,i,{get:()=>e[i],enumerable:!(t=d(e,i))||t.enumerable});return a},b=a=>h(s({},"__esModule",{value:!0}),a),y=(a,e,n)=>(g(a,typeof e!="symbol"?e+"":e,n),n),c={};k(c,{default:()=>E}),r.exports=b(c);var u=class{static mergeLocales(...a){let e={};return a.forEach(n=>{Object.keys(n).forEach(t=>{typeof n[t]=="object"?e[t]={...e[t],...n[t]}:e[t]=n[t]})}),e}static trimLocale(a,e){let n=(t,i)=>{a[t]&&(i?a[t][i]&&delete a[t][i]:delete a[t])};Object.keys(e).forEach(t=>{Object.keys(e[t]).length>0?Object.keys(e[t]).forEach(i=>n(t,i)):n(t)})}static normalizeLocale(a,e){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!e)throw new Error('"config" parameter can not be empty');e.locale?e.name=a||e.name:e.localeName=a}else e=a;let n={};if(e.name||e.locale)n=Object.assign({localeName:e.name},e.locale),e.desc&&(n.localeDesc=e.desc),e.code&&(n.localeCode=e.code),e.path&&(n.localePath=e.path);else{if(!e.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},e)}for(let t of["name","desc","code","path"])n[t]&&delete n[t];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return globalThis.bryntum.locales||{}}static set locales(a){globalThis.bryntum.locales=a}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(a){globalThis.bryntum.locale=a||u.localeName}static get locale(){return u.localeName&&this.locales[u.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,e){let{locales:n}=globalThis.bryntum,t=u.normalizeLocale(a,e),{localeName:i}=t;return!n[i]||e===!0?n[i]=t:n[i]=this.mergeLocales(n[i]||{},t||{}),n[i]}},l=u;y(l,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},l._$name="LocaleHelper";var T={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Buang kebergantungan"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Nyahaktifkan kebergantungan"},CycleEffectDescription:{descriptionTpl:"Kitaran telah ditemui, dibentuk oleh: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" kalendar tidak memberikan sebarang jeda masa bekerja.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Guna kalendar 24 jam dengan Sabtu dan Ahad tidak bekerja."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Guna kalendar 8 jam (08:00-12:00, 13:00-17:00) dengan Sabtu dan Ahad tidak bekerja."},ConflictEffectDescription:{descriptionTpl:"Konflik penjadualan telah ditemui: {0} berkonflik dengan {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Tarikh mula projek {0}",endDateDescriptionTpl:"Tarikh tamat projek {0}"},DependencyType:{long:["Mula ke Mula","Mula ke Selesai","Selesai ke Mula","Selesai ke Selesai"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Dijadualkan secara manual "{2}" memaksa anak-anaknya untuk bermula tidak lewat daripada {0}',endDescriptionTpl:'Dijadualkan secara manual "{2}" memaksa anak-anaknya menyelesaikan tidak lewat daripada {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Dinyahdayakan penjadualan manual untuk "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Kebergantungan ({2}) daripada "{3}" kepada "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Buang kebergantugan daripada "{1}" kepada "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Nyahaktifkan kebergantungan daripada "{1}" kepada "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Tugas "{2}" {3} {0} kekangan',endDateDescriptionTpl:'Tugas "{2}" {3} {1} kekangan',constraintTypeTpl:{startnoearlierthan:"Mula tidak awal daripada",finishnoearlierthan:"Selesai tidak awal daripada",muststarton:"Mesti mula pada",mustfinishon:"Mesti selesai ada",startnolaterthan:"Mula tidak lewat daripada",finishnolaterthan:"Selesai tidak lewat daripada"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Buang "{1}" kekangan tugas "{0}"'}},w=l.publishLocale(T),S={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",Object:{Yes:"Ya",No:"Tidak",Cancel:"Batal",Ok:"OK",Week:"Minggu"},Combo:{noResults:"Tiada keputusan",recordNotCommitted:"Rekod tidak boleh ditambah",addNewValue:a=>`Tambah ${a}`},FilePicker:{file:"Fail"},Field:{badInput:"Nilai medan tak sah",patternMismatch:"Nilai harus sepadan dengan corak tertentu",rangeOverflow:a=>`Nilai mestilah kurang daripada atau sama dengan ${a.max}`,rangeUnderflow:a=>`Nilai mestilah lebih besar daripada atau sama dengan ${a.max}`,stepMismatch:"Nilai harus sesuai dengan langkah",tooLong:"Nilai harus lebih pendek",tooShort:"Nilai harus lebih panjang",typeMismatch:"Nilai diperlukan dalam format khas",valueMissing:"Medan ini diperlukan",invalidValue:"Nilai medan tak sah",minimumValueViolation:"Pelanggaran nilai minimum",maximumValueViolation:"Pelanggaran nilai maksimum",fieldRequired:"Medan ini diperlukan",validateFilter:"Nilai mesti dipilih daripada senarai"},DateField:{invalidDate:"Input tarikh tidak sah"},DatePicker:{gotoPrevYear:"Pergi ke tahun sebelumnya",gotoPrevMonth:"Pergi ke bulan sebelumnya",gotoNextMonth:"Pergi ke bulan berikutnya",gotoNextYear:"Pergi ke tahun berikutnya"},NumberFormat:{locale:"ms",currency:"MYR"},DurationField:{invalidUnit:"Unit tak sah"},TimeField:{invalidTime:"Input masa tak sah"},TimePicker:{hour:"Jam",minute:"Minit",second:"Saat"},List:{loading:"Memuatkan..."},GridBase:{loadMask:"Memuatkan...",syncMask:"Menyimpan perubahan, sila tunggu..."},PagingToolbar:{firstPage:"Pergi ke halaman pertama",prevPage:"Pergi ke halaman sebelumnya",page:"Halaman",nextPage:"Pergi ke halaman berikutnya",lastPage:"Pergi ke halaman terakhir",reload:"Muat semula halaman semasa",noRecords:"Tiada rekod untuk dipaparkan",pageCountTemplate:a=>`daripada ${a.lastPage}`,summaryTemplate:a=>`Memaparkan rekod ${a.start} - ${a.end} daripada ${a.allCount}`},PanelCollapser:{Collapse:"Kecil",Expand:"Kembang"},Popup:{close:"Tutup Pop Timbul"},UndoRedo:{Undo:"Buat Asal",Redo:"Buat Semula",UndoLastAction:"Buat asal tindakan terakhir",RedoLastAction:"Buat semula tindakan buat asal yang terakhir",NoActions:"Tiada item dalam baris gilir buat asal"},FieldFilterPicker:{equals:"sama dengan",doesNotEqual:"tidak sama dengan",isEmpty:"kosong",isNotEmpty:"tidak kosong",contains:"mengandungi",doesNotContain:"tidak mengandungi",startsWith:"bermula dengan",endsWith:"berakhir dengan",isOneOf:"salah satu daripada",isNotOneOf:"bukan salah satu daripada",isGreaterThan:"lebih besar daripada",isLessThan:"kurang daripada",isGreaterThanOrEqualTo:"lebih besar daripada atau sama dengan",isLessThanOrEqualTo:"kurang daripada atau sama dengan",isBetween:"antara",isNotBetween:"tidak antara",isBefore:"sebelum",isAfter:"selepas",isToday:"hari ini",isTomorrow:"esok",isYesterday:"semalam",isThisWeek:"minggu ini",isNextWeek:"minggu depan",isLastWeek:"minggu lepas",isThisMonth:"bulan ini",isNextMonth:"bulan depan",isLastMonth:"bulan lepas",isThisYear:"tahun ini",isNextYear:"tahun depan",isLastYear:"tahun lepas",isYearToDate:"tahun hingga kini",isTrue:"betul",isFalse:"salah",selectAProperty:"Pilih properti",selectAnOperator:"Pilih operator",caseSensitive:"Sensitif huruf",and:"dan",dateFormat:"D/M/YY",selectOneOrMoreValues:"Pilih satu atau lebih nilai",enterAValue:"Masukkan nilai",enterANumber:"Masukka nombor",selectADate:"Pilih tarikh"},FieldFilterPickerGroup:{addFilter:"Tambah penapis"},DateHelper:{locale:"ms",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisaat",plural:"ms",abbrev:"ms"},{single:"saat",plural:"saat",abbrev:"s"},{single:"minit",plural:"minit",abbrev:"min"},{single:"jam",plural:"jam",abbrev:"j"},{single:"hari",plural:"hari",abbrev:"h"},{single:"minggu",plural:"minggu",abbrev:"m"},{single:"bulan",plural:"bulan",abbrev:"bul"},{single:"sukutahun",plural:"sukutahun",abbrev:"st"},{single:"tahun",plural:"tahun",abbrev:"th"},{single:"dekad",plural:"dekad",abbrev:"dek"}],unitAbbreviations:[["mil"],["s","saat"],["m","min"],["j","jam"],["h"],["m","mg"],["b","bul","bln"],["st","suku","skt"],["t","th"],["dek"]],parsers:{L:"DD-MM-YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:a=>"ke-"+a}},N=l.publishLocale(S),M=new String,v={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",ColumnPicker:{column:"Kolum",columnsMenu:"Kolum",hideColumn:"Sembunyi kolum",hideColumnShort:"Sembunyi",newColumns:"Kolum baharu"},Filter:{applyFilter:"Guna penapis",filter:"Penapis",editFilter:"Edit penapis",on:"Hidup",before:"Sebelum",after:"Selepas",equals:"Sama dengan",lessThan:"Kurang daripada",moreThan:"Lebih daripada",removeFilter:"Buang penapis",disableFilter:"Nyahdaya penapis"},FilterBar:{enableFilterBar:"Tunjuk bar penapis",disableFilterBar:"Sembunyi bar penapis"},Group:{group:"Kumpulan",groupAscending:"Kumpulan menaik",groupDescending:"Kumpulan menurun",groupAscendingShort:"Menaik",groupDescendingShort:"Menurun",stopGrouping:"Henti mengumpulkan",stopGroupingShort:"Henti"},HeaderMenu:{moveBefore:a=>`Gerak sebelum "${a}"`,moveAfter:a=>`Gerak selepas "${a}"`,collapseColumn:"Runtuh lajur",expandColumn:"Kembang lajur"},ColumnRename:{rename:"Nama semula"},MergeCells:{mergeCells:"Gabung sel",menuTooltip:"Gabungkan sel dengan nilai yang sama apabila diisih mengikut kolum ini"},Search:{searchForValue:"Cari nilai"},Sort:{sort:"Isih",sortAscending:"Isih menaik",sortDescending:"Isih menurun",multiSort:"Multi isih",removeSorter:"Buang pengisih",addSortAscending:"Tambah pengisih menaik",addSortDescending:"Tambah pengisih menurun",toggleSortAscending:"Tukar kepada menaik",toggleSortDescending:"Tukar kepada menurun",sortAscendingShort:"Menaik",sortDescendingShort:"Menurun",removeSorterShort:"Buang",addSortAscendingShort:"+ Menaik",addSortDescendingShort:"+ Menurun"},Column:{columnLabel:a=>`${a.text?`${a.text} kolum. `:""}SPACE untuk menu konteks${a.sortable?", ENTER untuk isih":""}`,cellLabel:M},Checkbox:{toggleRowSelect:"Togel pemilihan baris",toggleSelection:"Togel pemilihan set data keseluruhan"},RatingColumn:{cellLabel:a=>{var e;return`${a.text?a.text:""} ${(e=a.location)!=null&&e.record?` penilaian : ${a.location.record[a.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Pemuatan data gagal!",syncFailedMessage:"Sinkronisasi data gagal!",unspecifiedFailure:"Kegagalan tak dinyata",networkFailure:"Ralat rangkaian",parseFailure:"Gagal menghuraikan respons pelayan",serverResponse:"Respons pelayan:",noRows:"Tiada rekod untuk dipaparkan",moveColumnLeft:"Gerak ke bahagian kiri",moveColumnRight:"Gerak ke bahagian kanan",moveColumnTo:a=>`Gerak kolum ke ${a}`},CellMenu:{removeRow:"Hapus"},RowCopyPaste:{copyRecord:"Salin",cutRecord:"Potong",pasteRecord:"Tampal",rows:"baris-baris",row:"baris"},CellCopyPaste:{copy:"Salin",cut:"Potong",paste:"Tampal"},PdfExport:{"Waiting for response from server":"Menunggu respons daripada pelayan...","Export failed":"Eksport gagal","Server error":"Ralat pelayan","Generating pages":"Menjana halaman...","Click to abort":"Batal"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Tetapan eksport",export:"Eksport",exporterType:"Kawal penomboran",cancel:"Batal",fileFormat:"Format fail",rows:"Baris",alignRows:"Jajarkan baris",columns:"Kolum",paperFormat:"Format kertas",orientation:"Orientasi",repeatHeader:"Pengepala ulang"},ExportRowsCombo:{all:"Semua baris",visible:"Baris boleh lihat"},ExportOrientationCombo:{portrait:"Portret",landscape:"Landskap"},SinglePageExporter:{singlepage:"Halaman tunggal"},MultiPageExporter:{multipage:"Halaman pelbagai",exportingPage:({currentPage:a,totalPages:e})=>`Mengeksport halaman ${a}/${e}`},MultiPageVerticalExporter:{multipagevertical:"Halaman pelbagai (menegak)",exportingPage:({currentPage:a,totalPages:e})=>`Mengeksport halaman ${a}/${e}`},RowExpander:{loading:"Memuat",expand:"Kembang",collapse:"Kecil"}},A=l.publishLocale(v),D={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",Object:{newEvent:"Peristiwa baharu"},ResourceInfoColumn:{eventCountText:a=>a+" peristiwa"},Dependencies:{from:"Daripada",to:"Kepada",valid:"Sah",invalid:"Tidak sah"},DependencyType:{SS:"MM",SF:"MS",FS:"SM",FF:"SS",StartToStart:"Mula ke Mula",StartToEnd:"Mula ke Selesai",EndToStart:"Selesai ke Mula",EndToEnd:"Selesai ke Selesai",short:["MM","MS","SM","SS"],long:["Mula ke Mula","Mula ke Selesai","Selesai ke Mula","Selesai ke Selesai"]},DependencyEdit:{From:"Daripada",To:"Kepada",Type:"Jenis",Lag:"Sela","Edit dependency":"Edit kebergantungan",Save:"Simpan",Delete:"Hapus",Cancel:"Batal",StartToStart:"Mula ke Mula",StartToEnd:"Mula ke Akhir",EndToStart:"Akhir ke Mula",EndToEnd:"Akhir ke Akhir"},EventEdit:{Name:"Nama",Resource:"Sumber",Start:"Mula",End:"Akhir",Save:"Simpan",Delete:"Hapus",Cancel:"Batal","Edit event":"Edit peristiwa",Repeat:"Ulang"},EventDrag:{eventOverlapsExisting:"Peristiwa bertindih dengan peristiwa sedia ada untuk sumber ini",noDropOutsideTimeline:"Peristiwa tidak boleh digugurkan sepenuhnya di luar garis masa"},SchedulerBase:{"Add event":"Tambah peristiwa","Delete event":"Hapus peristiwa","Unassign event":"Nyahtetap peristiwa"},TimeAxisHeaderMenu:{pickZoomLevel:"Zum",activeDateRange:"Julat tarikh",startText:"Tarikh mula",endText:"Tarikh akhir",todayText:"Hari ini"},EventCopyPaste:{copyEvent:"Salin peristiwa",cutEvent:"Potong peristiwa",pasteEvent:"Tampal peristiwa"},EventFilter:{filterEvents:"Tapis tugas",byName:"Ikut nama"},TimeRanges:{showCurrentTimeLine:"Tunjuk garis masa semasa"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Saat"},minuteAndHour:{topDateFormat:"ddd DD-MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD-MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Hari"},day:{name:"Hari/jam"},week:{name:"Minggu/jam"},dayAndWeek:{displayDateFormat:"ll LST",name:"Minggu/hari"},dayAndMonth:{name:"Bulan"},weekAndDay:{displayDateFormat:"ll LST",name:"Minggu"},weekAndMonth:{name:"Minggu"},weekAndDayLetter:{name:"Minggu/hari biasa"},weekDateAndMonth:{name:"Bulan/minggu"},monthAndYear:{name:"Bulan"},year:{name:"Tahun"},manyYears:{name:"Berbilang tahun"}},RecurrenceConfirmationPopup:{"delete-title":"Anda menghapuskan peristiwa","delete-all-message":"Adakah anda mahu menghapuskan semua kejadian peristiwa ini?","delete-further-message":"Adakah anda mahu menghapuskan ini dan semua kejadian masa hadapan peristiwa ini, atau hanya kejadian yang dipilih?","delete-further-btn-text":"Hapus Semua Peristiwa Masa Depan","delete-only-this-btn-text":"Padam Hanya Peristiwa Ini","update-title":"Anda mengubah peristiwa berulang","update-all-message":"Adakah anda mahu mengubah semua kejadian peristiwa ini?","update-further-message":"Adakah anda mahu menukar kejadian peristiwa ini sahaja, atau ini dan semua kejadian akan datang?","update-further-btn-text":"Semua Peristiwa Masa Depan","update-only-this-btn-text":"Hanya Peristiwa Ini",Yes:"Ya",Cancel:"Batal",width:600},RecurrenceLegend:{" and ":" dan ",Daily:"Harian","Weekly on {1}":({days:a})=>`Mingguan pada ${a}`,"Monthly on {1}":({days:a})=>`Bulanan pada ${a}`,"Yearly on {1} of {2}":({days:a,months:e})=>`Tahunan pada ${a} daripada ${e}`,"Every {0} days":({interval:a})=>`Setiap ${a} hari`,"Every {0} weeks on {1}":({interval:a,days:e})=>`Setiap ${a} minggu pada ${e}`,"Every {0} months on {1}":({interval:a,days:e})=>`Setiap ${a} bulan pada ${e}`,"Every {0} years on {1} of {2}":({interval:a,days:e,months:n})=>`Setiap ${a} tahun pada ${e} daripada ${n}`,position1:"pertama",position2:"kedua",position3:"ketiga",position4:"keempat",position5:"kelima","position-1":"terakhir",day:"hari",weekday:"hari minggu","weekend day":"hari hujung minggu",daysFormat:({position:a,days:e})=>`${a} ${e}`},RecurrenceEditor:{"Repeat event":"Peristiwa ulang",Cancel:"Batal",Save:"Simpan",Frequency:"Frekuensi",Every:"Setiap",DAILYintervalUnit:"hari",WEEKLYintervalUnit:"minggu",MONTHLYintervalUnit:"bulan",YEARLYintervalUnit:"tahun",Each:"Setiap","On the":"Pada","End repeat":"Akhir ulang","time(s)":"masa"},RecurrenceDaysCombo:{day:"hari",weekday:"hari minggu","weekend day":"hari hujung minggu"},RecurrencePositionsCombo:{position1:"pertama",position2:"kedua",position3:"ketiga",position4:"keempat",position5:"kelima","position-1":"terakhir"},RecurrenceStopConditionCombo:{Never:"Jangan",After:"Selepas","On date":"Pada tarikh"},RecurrenceFrequencyCombo:{None:"Tiada ulangan",Daily:"Harian",Weekly:"Mingguan",Monthly:"Bulanan",Yearly:"Tahunan"},RecurrenceCombo:{None:"Tiada",Custom:"Suaikan..."},Summary:{"Summary for":a=>`Ringkasan untuk ${a}`},ScheduleRangeCombo:{completeview:"Jadual lengkap",currentview:"Jadual boleh lihat",daterange:"Julat tarikh",completedata:"Jadual lengkap (untuk semua peristiwa)"},SchedulerExportDialog:{"Schedule range":"Julat jadual","Export from":"Daripada","Export to":"Kepada"},ExcelExporter:{"No resource assigned":"Tiada sumber diperuntukkan"},CrudManagerView:{serverResponseLabel:"Respons pelayan:"},DurationColumn:{Duration:"Tempoh"}},j=l.publishLocale(D),f={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",ConstraintTypePicker:{none:"Tiada",muststarton:"Mesti mula pada",mustfinishon:"Mesti selesai ada",startnoearlierthan:"Mula tidak awal daripada",startnolaterthan:"Mula tidak lewat daripada",finishnoearlierthan:"Selesai tidak awal daripada",finishnolaterthan:"Selesai tidak lewat daripada"},CalendarField:{"Default calendar":"Kalendar lalai"},TaskEditorBase:{Information:"Maklumat",Save:"Simpan",Cancel:"Batal",Delete:"Hapus",calculateMask:"Mengira...",saveError:"Tak boleh simpan, sila betulkan ralat dahulu",repeatingInfo:"Melihat acara berulang",editRepeating:"Edit"},TaskEdit:{"Edit task":"Edit tugas",ConfirmDeletionTitle:"Sahkan penghapusan",ConfirmDeletionMessage:"Adakah anda pasti mahu menghapuskan peristiwa?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Umum",Name:"Nama",Resources:"Sumber","% complete":"% selesai",Duration:"Tempoh",Start:"Mula",Finish:"Selesai",Effort:"Usaha",Preamble:"Mukadimah",Postamble:"Pasca Mukadimah"},GeneralTab:{labelWidth:"6.5em",General:"Umum",Name:"Nama","% complete":"% selesai",Duration:"Tempoh",Start:"Mula",Finish:"Selesai",Effort:"Usaha",Dates:"Tarikh"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Lanjutan",Calendar:"Kalendar","Scheduling mode":"Mod Penjadualan","Effort driven":"Didorong usaha","Manually scheduled":"Dijadualkan secara manual","Constraint type":"Jenis kekang","Constraint date":"Tarikh kekang",Inactive:"Tidak aktif","Ignore resource calendar":"Abai kalendar sumber"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Lanjutan",Calendar:"Kalendar","Scheduling mode":"Mod Penjadualan","Effort driven":"Didorong usaha","Manually scheduled":"Dijadualkan secara manual","Constraint type":"Jenis kekang","Constraint date":"Tarikh kekang",Constraint:"Kekang",Rollup:"Menggulung",Inactive:"Tidak aktif","Ignore resource calendar":"Abai kalendar sumber"},DependencyTab:{Predecessors:"Pendahulu",Successors:"Pengganti",ID:"ID",Name:"Nama",Type:"Jenis",Lag:"Sela",cyclicDependency:"Kebergantungan kitaran",invalidDependency:"Kebergantungan tak sah"},NotesTab:{Notes:"Nota"},ResourcesTab:{unitsTpl:({value:a})=>`${a}%`,Resources:"Sumber",Resource:"Sumber",Units:"Unit"},RecurrenceTab:{title:"Ulang"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Tempoh Tetap","Fixed Units":"Unit Tetap","Fixed Effort":"Usaha Tetap"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} daripada {available}</span> diperuntukkan',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} daripada {available}</span> diperuntukkan',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} daripada {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} daripada {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Pada {startDate}<br><span class="{cls}">{allocated} daripada {available}</span> diperuntukkan:<br>{assignments}',plusMore:"+{value} lagi"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> diperuntukkan',barTipOnDate:'<b>{event}</b> pada {startDate}<br><span class="{cls}">{allocated}</span> diperuntukkan',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} daripada {available}</span> diperuntukkan:<br>{assignments}',groupBarTipOnDate:'Pada {startDate}<br><span class="{cls}">{allocated} daripada {available}</span> diperuntukkan:<br>{assignments}',plusMore:"+{value} lagi",nameColumnText:"Sumber / Peristiwa"},SchedulingIssueResolutionPopup:{"Cancel changes":"Batalkan perubahan dan jangan lakukan apa-apa",schedulingConflict:"Konflik penjadualan",emptyCalendar:"Ralat konfigurasi kalendar",cycle:"Kitaran penjadualan",Apply:"Guna"},CycleResolutionPopup:{dependencyLabel:"Sila pilih kebergantungan:",invalidDependencyLabel:"Terdapat kebergantungan tak sah yang terlibat yang perlu ditangani:"},DependencyEdit:{Active:"Aktif"},SchedulerProBase:{propagating:"Mengira projek",storePopulation:"Memuat data",finalizing:"Memuktamad keputusan"},EventSegments:{splitEvent:"Pecah acara",renameSegment:"Nama semula"},NestedEvents:{deNestingNotAllowed:"Menyahsarangan tak dibenarkan",nestingNotAllowed:"Sarangan tak dibenarkan"},VersionGrid:{compare:"Bandingkan",description:"Penerangan",occurredAt:"Berlaku pada",rename:"Tukar nama",restore:"Kembalikan",stopComparing:"Berhenti bandingkan"},Versions:{entityNames:{TaskModel:"tugas",AssignmentModel:"tugasan",DependencyModel:"pautan",ProjectModel:"projek",ResourceModel:"sumber",other:"objek"},entityNamesPlural:{TaskModel:"tugas",AssignmentModel:"tugasan",DependencyModel:"pautan",ProjectModel:"projek",ResourceModel:"sumber",other:"objek"},transactionDescriptions:{update:"Tukar {n} {entities}",add:"Tambah {n} {entities}",remove:"Buang {n} {entities}",move:"Alih {n} {entities}",mixed:"Tukar {n} {entities}"},addEntity:"Tambah {type} **{name}**",removeEntity:"Buang {type} **{name}**",updateEntity:"Tukar {type} **{name}**",moveEntity:"Alih {type} **{name}** from {from} to {to}",addDependency:"Tambah pautan daripada **{from}** sehingga **{to}**",removeDependency:"Buang pautan daripada **{from}** sehingga **{to}**",updateDependency:"Edit pautan daripada **{from}** sehingga **{to}**",addAssignment:"Tugaskan **{resource}** sehingga **{event}**",removeAssignment:"Buang tugasan **{resource}** daripada **{event}**",updateAssignment:"Edit tugasan **{resource}** sehingga **{event}**",noChanges:"Tiada perubahan",nullValue:"tiada",versionDateFormat:"M/D/YYYY h:mm a",undid:"Nyahbuat perubahan",redid:"Buat semula perubahan",editedTask:"Edit properti tugas",deletedTask:"Padam tugas",movedTask:"Alih satu tugas",movedTasks:"Alih tugas"}},R=l.publishLocale(f),C={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",Object:{Save:"Simpan"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Abai kalendar sumber"},InactiveColumn:{Inactive:"Tak Aktif"},AddNewColumn:{"New Column":"Kolum Baharu"},CalendarColumn:{Calendar:"Kalendar"},EarlyStartDateColumn:{"Early Start":"Mula Awal"},EarlyEndDateColumn:{"Early End":"Akhir Awal"},LateStartDateColumn:{"Late Start":"Mula Lambat"},LateEndDateColumn:{"Late End":"Akhir Lambat"},TotalSlackColumn:{"Total Slack":"Keseluruhan Slack"},ConstraintDateColumn:{"Constraint Date":"Tarikh Kekang"},ConstraintTypeColumn:{"Constraint Type":"Jenis Kekang"},DeadlineDateColumn:{Deadline:"Tarikh Akhir"},DependencyColumn:{"Invalid dependency":"Kebergantungan tak sah"},DurationColumn:{Duration:"Tempoh"},EffortColumn:{Effort:"Usaha"},EndDateColumn:{Finish:"Habis"},EventModeColumn:{"Event mode":"Mod peristiwa",Manual:"Manual",Auto:"Auto"},ManuallyScheduledColumn:{"Manually scheduled":"Dijadualkan secara manual"},MilestoneColumn:{Milestone:"Sorotan"},NameColumn:{Name:"Nama"},NoteColumn:{Note:"Nota"},PercentDoneColumn:{"% Done":"% Selesai"},PredecessorColumn:{Predecessors:"Pendahulu"},ResourceAssignmentColumn:{"Assigned Resources":"Sumber Diperuntukkan","more resources":"lagi sumber"},RollupColumn:{Rollup:"Menggulung"},SchedulingModeColumn:{"Scheduling Mode":"Mod Penjadualan"},SequenceColumn:{Sequence:"Urutan"},ShowInTimelineColumn:{"Show in timeline":"Tunjuk dalam garis masa"},StartDateColumn:{Start:"Mula"},SuccessorColumn:{Successors:"Pengganti"},TaskCopyPaste:{copyTask:"Salin",cutTask:"Potong",pasteTask:"Tampal"},WBSColumn:{WBS:"WBS",renumber:"Nombor semula"},DependencyField:{invalidDependencyFormat:"Format kebergantungan tak sah"},ProjectLines:{"Project Start":"Mula projek","Project End":"Akhir projek"},TaskTooltip:{Start:"Mula",End:"Akhir",Duration:"Tempoh",Complete:"Selesai"},AssignmentGrid:{Name:"Nama sumber",Units:"Unit",unitsTpl:({value:a})=>a?a+"%":""},Gantt:{Edit:"Edit",Indent:"Inden",Outdent:"Outden","Convert to milestone":"Tukar kepada sorotan",Add:"Tambah...","New task":"Tugas baru","New milestone":"Sorotan baharu","Task above":"Tugas atas","Task below":"Tugas bawah","Delete task":"Hapus",Milestone:"Sorotan","Sub-task":"Subtugas",Successor:"Pengganti",Predecessor:"Pendahulu",changeRejected:"Enjin penjadualan menolak perubahan",linkTasks:"Tambahkan kebergantungan",unlinkTasks:"Buang kebergantungan"},EventSegments:{splitTask:"Pecah tugas"},Indicators:{earlyDates:"Mula/akhir awal",lateDates:"Mula/akhir lambat",Start:"Mula",End:"Akhir",deadlineDate:"Tarikh Akhir"},Versions:{indented:"Inden",outdented:"Luar inden",cut:"Potong",pasted:"Tampal",deletedTasks:"Padam tugas"}},E=l.publishLocale(C);if(typeof r.exports=="object"&&typeof o=="object"){var P=(a,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Object.getOwnPropertyNames(e))!Object.prototype.hasOwnProperty.call(a,i)&&i!==n&&Object.defineProperty(a,i,{get:()=>e[i],enumerable:!(t=Object.getOwnPropertyDescriptor(e,i))||t.enumerable});return a};r.exports=P(r.exports,o)}return r.exports});