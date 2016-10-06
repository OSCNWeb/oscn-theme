
$(document).ready(function(){

//removeSubMenus();
//addSubMenus();
var nav = $("nav").clone();

var uuid = "accessible-megamenu";

var maxSizeHamburger = 818;
var lastwidth = 0;
var currwidth = 0;
var ltIE8 = false;
var ltIE9 = false;
var engine = document.documentMode != null ? document.documentMode : 11;

if($(".lt-ie8").length > 0) { ltIE8 = true; }
if($(".lt-ie9").length > 0) { ltIE9 = true; }

setupResize();
buttonbar();
//search();
//footerbottom();
		
function setupResize(){
	window.onresize = function(event) {
		buttonbar();
		//footerbottom();
	};
}
function buttonbar(){	
	currwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if((currwidth > maxSizeHamburger)&&(lastwidth <= maxSizeHamburger)){
		//console.log("larger");
		unhamburger();
		$("nav").replaceWith(nav.clone());
		wireupMenu();
	}
	else if((currwidth <= maxSizeHamburger) && (lastwidth > maxSizeHamburger)){
		//console.log("smaller");
		$("nav").replaceWith(nav.clone());
		hamburgler();
	}else if(lastwidth == 0){
		//console.log("started small");
		hamburgler();
	}
	lastwidth = currwidth; 
}

function hamburgler(){
	$("nav:first").hide();
	$(".toggle").show();
	$(".toggle button").attr("aria-haspopup","true");
	$(".toggle button").attr("aria-expanded","false");
	$(".toggle button").click(function(){
		var $this = $(this);
		if($this.hasClass("toggled")){
			$this.attr("aria-expanded","false");
			$this.removeClass("toggled");
			$("nav:first").hide();
		}else{
			$this.attr("aria-expanded","true");
			$this.addClass("toggled");
			$("nav:first").show();
		}
	});
}
function unhamburger(){
	$("nav:first").show();
	$(".toggle").hide();
	$(".toggle button").removeAttr("aria-haspopup");
	$(".toggle button").removeAttr("aria-expanded");
	$(".toggle button").unbind("click");
}

function wireupMenu(){
 
	if(ltIE8) return;
	
	//addSubMenus();
	//courtList();
	$(".sub-nav").show();
	//setMenuSize();
	$("nav").accessibleMegaMenu({
		/* prefix for generated unique id attributes, which are required 
		   to indicate aria-owns, aria-controls and aria-labelledby */
		uuidPrefix: "accessible-megamenu",

		/* css class used to define the megamenu styling */
		menuClass: "menu",

		/* css class for a top-level navigation item in the megamenu */
		topNavItemClass: "nav-item",

		/* css class for a megamenu panel */
		panelClass: "sub-nav",

		/* css class for a group of items within a megamenu panel */
		panelGroupClass: "sub-nav-group",

		/* css class for the hover state */
		hoverClass: "hover",

		/* css class for the focus state */
		focusClass: "focus",

		/* css class for the open state */
		openClass: "open"
	});
}

});
/*
function addSubMenus(){

var courts = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span4"><h3>Appellate Courts</h3><ol><li><a class="pdf-link" target="_blank" href="http://www.oscn.net/static/osc-ojs-brochure-online.pdf">About the Courts</a></li><li><a href="http://www.oscn.net/oscn/schome/">Supreme Court</a></li><li><a href="http://www.okcca.net/">Court of Criminal Appeals</a></li><li><a class="pdf-link" target="_blank" href="http://www.oscn.net/static/osc-ojs-brochure-online.pdf">Court of Civil Appeals</a></li></ol><h3>Other Courts</h3><a href="http://www.owcc.state.ok.us/">Workers\' Compensation Court of Existing Claims</a><h3>Judicial Biographies</h3><ol><li><a href="http://www.oscn.net/static/osc-ojs-brochure-online.pdf#page=3">Oklahoma Supreme Court</a></li><li><a href="http://www.oscn.net/static/osc-ojs-brochure-online.pdf#page=53">Oklahoma Court of Criminal Appeals</a></li><li><a href="http://www.oscn.net/static/osc-online-judges-coca-2014.pdf">Oklahoma Court of Civil Appeals</a></li>		<li><a href="http://www.oscn.net/static/osc-ojs-brochure-online.pdf#page=64">Oklahoma Trial Court</a></li><li><a href="http://www.oscn.net/static/osc-online-judges-workers-compensation-2014.pdf">Oklahoma Workers\' Compensation</a></li></ol></li><li class="sub-nav-group span8"><h3>District Courts</h3><ol class="courts-list"><li><a href="/courts/adair">Adair</a></li><li><a href="/courts/alfalfa">Alfalfa</a></li><li><a href="/courts/atoka">Atoka</a></li><li><a href="/courts/beaver">Beaver</a></li><li><a href="/courts/beckham">Beckham</a></li><li><a href="/courts/blaine">Blaine</a></li><li><a href="/courts/bryan">Bryan</a></li><li><a href="/courts/caddo">Caddo</a></li><li><a href="/courts/canadian">Canadian</a></li><li><a href="/courts/carter">Carter</a></li><li><a href="/courts/cherokee">Cherokee</a></li><li><a href="/courts/choctaw">Choctaw</a></li><li><a href="/courts/cimarron">Cimarron</a></li><li><a href="/courts/cleveland">Cleveland</a></li><li><a href="/courts/coal">Coal</a></li><li><a href="/courts/comanche">Comanche</a></li><li><a href="/courts/cotton">Cotton</a></li><li><a href="/courts/craig">Craig</a></li><li><a href="/courts/creek">Creek</a></li><li><a href="/courts/custer">Custer</a></li><li><a href="/courts/delaware">Delaware</a></li><li><a href="/courts/dewey">Dewey</a></li><li><a href="/courts/ellis">Ellis</a></li><li><a href="/courts/garfield">Garfield</a></li><li><a href="/courts/garvin">Garvin</a></li><li><a href="/courts/grady">Grady</a></li><li><a href="/courts/grant">Grant</a></li><li><a href="/courts/greer">Greer</a></li><li><a href="/courts/harmon">Harmon</a></li><li><a href="/courts/harper">Harper</a></li><li><a href="/courts/haskell">Haskell</a></li><li><a href="/courts/hughes">Hughes</a></li><li><a href="/courts/jackson">Jackson</a></li><li><a href="/courts/jefferson">Jefferson</a></li><li><a href="/courts/johnston">Johnston</a></li><li><a href="/courts/kay">Kay</a></li><li><a href="/courts/kingfisher">Kingfisher</a></li><li><a href="/courts/kiowa">Kiowa</a></li><li><a href="/courts/latimer">Latimer</a></li><li><a href="/courts/leflore">LeFlore</a></li><li><a href="/courts/lincoln">Lincoln</a></li><li><a href="/courts/logan">Logan</a></li><li><a href="/courts/love">Love</a></li><li><a href="/courts/major">Major</a></li><li><a href="/courts/marshall">Marshall</a></li><li><a href="/courts/mayes">Mayes</a></li><li><a href="/courts/mcclain">McClain</a></li><li><a href="/courts/mccurtain">McCurtain</a></li><li><a href="/courts/mcintosh">McIntosh</a></li><li><a href="/courts/murray">Murray</a></li><li><a href="/courts/muskogee">Muskogee</a></li><li><a href="/courts/noble">Noble</a></li><li><a href="/courts/nowata">Nowata</a></li><li><a href="/courts/okfuskee">Okfuskee</a></li><li><a href="/courts/oklahoma">Oklahoma</a></li><li><a href="/courts/okmulgee">Okmulgee</a></li><li><a href="/courts/osage">Osage</a></li><li><a href="/courts/ottawa">Ottawa</a></li><li><a href="/courts/pawnee">Pawnee</a></li><li><a href="/courts/payne">Payne</a></li><li><a href="/courts/pittsburg">Pittsburg</a></li><li><a href="/courts/pontotoc">Pontotoc</a></li><li><a href="/courts/pottawatomie">Pottawatomie</a></li><li><a href="/courts/pushmataha">Pushmataha</a></li><li><a href="/courts/roger-mills">Roger Mills</a></li><li><a href="/courts/rogers">Rogers</a></li><li><a href="/courts/seminole">Seminole</a></li><li><a href="/courts/sequoyah">Sequoyah</a></li><li><a href="/courts/stephens">Stephens</a></li><li><a href="/courts/texas">Texas</a></li><li><a href="/courts/tillman">Tillman</a></li><li><a href="/courts/tulsa">Tulsa</a></li><li><a href="/courts/wagoner">Wagoner</a></li><li><a href="/courts/washington">Washington</a></li><li><a href="/courts/washita">Washita</a></li><li><a href="/courts/woods">Woods</a></li><li><a href="/courts/woodward">Woodward</a></li></ol></li></ol></div>';
var news = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span3"><h3>News</h3><ol><li><a href="/news/">Recent News</a></li><li><a href="/news/archive">Archived News</a></li></ol></li></ol></div>';
var decisions = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span4"><h3>Supreme Court of Oklahoma</h3><ol><li><a href="/decisions/ok/7">New Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSSC">View Decisions by Year</a></li></ol></li><li class="sub-nav-group span4"><h3>Court of Criminal Appeals</h3><ol><li><a href="/decisions/ok-cr/7">New Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSCR">View Decisions by Year</a></li></ol></li><li class="sub-nav-group span4"><h3>Court of Civil Appeals</h3><ol><li><a href="/decisions/ok-civ-app/7">New Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSCV">View Decisions by Year</a></li></ol></li></ol></div>';
var programs = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span4"><h3>Court Programs</h3><ol><li><a target="_blank" href="http://www.thesovereigntysymposium.com/splash.aspx">The Sovereignty Symposium</a></li><li><a href="http://www.oscn.net/static/adr/default.aspx">Alternative Dispute Resolution</a></li><li><a href="http://www.oscn.net/static/adr/default.aspx">Early Settlement Mediation</a></li><li><a href="http://www.oscn.net/Sites/CourtImprovement/default.aspx">Children\'s Court Improvement Program (CIP)</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/interpreter.asp">Certified Courtroom Interpreters</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/csr.asp">Certified Shorthand Reporters</a></li><li><a href="/jnc/">Judicial Nominating Commission</a></li></ol>										</li><li class="sub-nav-group span4"><h3>Access To Justice</h3><ol><li><a href="http://www.oscn.net/static/access to justice members.pdf">Commisioners</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/protectiveorders.asp">Protective Orders</a></li><li><a href="http://www.oscn.net/static/forms/childsupport.asp">Child Support</a></li><li><a class="pdf-link" target="_blank" href="http://www.oscn.net/forms/aoc_form/adobe/dom.-standard-visit-sch.-advis.%20gdelns.pdf">Standard Visitation Schedule &amp; Advisory Guidelines</a></li><li><a target="_blank" class="external-link" href="http://oklaw.org/legal-aid-self-help-forms">Legal Aid Self-Help Forms</a></li></ol></li><li class="sub-nav-group span4"><h3>Accessibility</h3><ol><li><a href="/pages/accessibility">Accessibility Statement</a></li></li></ol></div>';
var legalresearch = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span4"><h3>Legal Research</h3><ol><li><a href="http://www.oscn.net/applications/oscn/start.asp?viewType=LIBRARY&p=1">All Legal Research</a></li><!--<li><a href="http://www.oscn.net/applications/oscn/judges.asp">List of Appellate Opinions by Judge</a></li>--><li><a href="http://www.oscn.net/applications/oscn/start.asp?viewType=LIBRARY&p=2">Federal Legal Materials</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=FDCS&level=1">Indian Territory Cases</a></li></ol><h3>Search</h3><ol><li><a href="http://www.oscn.net/applications/oscn/search.asp?simple=true">Search</a></li><li><a href="http://www.oscn.net/applications/oscn/search.asp">Advanced Search</a></li><li><a href="http://www.oscn.net/applications/oscn/QuickCase.asp">Batch Citator</a></li></ol></li><li class="sub-nav-group span4"><h3>Oklahoma Law</h3><ol><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKCS&level=1">Appellate Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSSC&level=1">Supreme Court Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSCR&level=1">Court of Criminal Appeals Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSCV&level=1">Court of Civil Appeals Decisions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSJU&level=1">Court on the Judiciary Opinions</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST&level=1">Statutes</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKLG&level=1">Session Laws</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKCN&level=1">Constitution</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKRU&level=2">Court Rules</a></li><!--<li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKEF&level=1">Rules for e-Filing in Selected Pilot Courts</a></li>--><li><a target="_blank" href="https://www.sos.ok.gov/oar/Default.aspx">Administrative Code and Oklahoma Register (Secretary of State)</a></li></ol></li><li class="sub-nav-group span4"><h3>Oklahoma Legal Materials</h3><ol><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKJU&level=1">Uniform Jury Instructions</a></li><li><a href="http://www.oscn.net/static/forms/start.asp">Legal Forms</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKRP&level=1">Registry of Frivolous or Malicious Appeals</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKFF&level=1">Full Faith and Credit of Tribal Courts</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKAG&level=1">Attorney General Opinions</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKCSJE&level=1">Judicial Ethics Advisory Panel Opinions</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKFB&level=1">Fee &amp; Bond Schedules</a></li><li><a href="http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKAP&level=1">Fee and Copy Schedules for Appellate Courts</a></li><li><a href="http://www.oscn.net/applications/oscn/index.asp?ftdb=STOKIN&level=1">Interest on Judgments</a></li></ol></li></ol></div>';
var courtrecords = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span3"><h3>Search</h3><ol><li><a href="/dockets/Search.aspx">Search OSCN Court Records</a></li><li><a target="_blank" href="http://www1.odcr.com/">Search Non-OSCN Court Records</a></li></ol></li><li class="sub-nav-group span3"><h3>Court Records</h3><ol><li><a href="http://www.oscn.net/applications/oscn/simplehelp.asp?helpcontextid=5">Available Court Records</a></li><!-- <li><a href="#">Look-up Case number</a></li> --><li><a href="http://www.oscn.net/applications/oscn/simplehelp.asp?helpcontextid=4">Court Records Help</a></li></ol></li><li class="sub-nav-group span6"><h3>Court Reports</h3><ol><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=rptCivilCasesWithTrialDispositionsMAIN">Civil Cases with Trial Dispositions</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=WebJudicialDocketJudgeAll">Daily Docket - All Events - Specific Judge</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=WebJudicialDocketJudgeCaseTypeAll">Daily Docket - All Events - Specific Judge - Specific Case Type</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=WebJudicialDocketCaseTypeAll">Daily Docket - All Events - Specific Case Type</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=WebJudicialDocketEventAll">Daily Docket - Specific Event</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=WebJudicialDocketJudgeEventAll">Daily Docket - Specific Event - Specific Judge</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=WebJudicialDocketJudgeCaseTypeEvent">Daily Docket - Specific Event - Specific Judge - Specific Case Type</a></li><li><a href="http://www.oscn.net/applications/oscn/report.asp?report=DailyFilings">Daily Filings by County</a></li></ol></li></ol></div>';
var quicklinks = '<div class="sub-nav container-fluid"><ol class="row-fluid"><li class="sub-nav-group span3"><h3>Forms</h3><ol><li><a href="http://www.oscn.net/static/forms/scforms.asp">Supreme Court and Court of Civil Appeals</a></li><li><a target="_blank" href="http://www.okcca.net/forms/index.html">Court of Criminal Appeals</a></li><li><a href="http://www.oscn.net/static/forms/AOCforms.asp">District Courts (Administrative Office of the Courts)</a></li><li><a href="http://www.oscn.net/static/forms/districtcover.asp">District Courts of Oklahoma Cover Sheets</a></li><li><a href="http://www.oscn.net/static/forms/childsupport.asp">Child Support</a></li><li><a class="pdf-link" target="_blank" href="http://www.oscn.net/forms/aoc_form/adobe/dom.-standard-visit-sch.-advis.%20gdelns.pdf">Standard Visitation Schedule &amp; Advisory Guidelines</a></li><li><a href="http://www.oscn.net/UniformOrders/default.aspx">Juvenile Courts</a></li><li><a target="_blank" href="http://www.owcc.state.ok.us/">Workers\' Compensation</a></li><li><a target="_blank" href="http://www.sos.state.ok.us/">Oklahoma Secretary of State</a></li><li><a target="_blank" class="external-link" href="http://oklaw.org/legal-aid-self-help-forms">Legal Aid Self-Help Forms</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/interpreter.asp">Certified Courtroom Interpreters</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/csr.asp">Certified Shorthand Reporters</a></li></ol></li><li class="sub-nav-group span3"><h3>Statewide Registries</h3><ol><li><a href="http://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=468488">Statewide Registry of Licensed Private Process&nbsp;Servers</a></li><li><a href="http://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=380115">Registry of Frivolous or Malicious Appeals</a></li><li><a href="http://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=458214">Full Faith and Credit of Tribal Courts</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/interpreter.asp">Certified Courtroom Interpreters</a></li><li><a href="http://www.oscn.net/static/forms/aoc_forms/csr.asp">Certified Shorthand Reporters</a></li><li><a target="_blank" href="http://sors.doc.state.ok.us/svor/f?p=103:1:231254177081259">Sex Offender Registry</a></li><li><a  class="pdf-link" target="_blank" href="http://www.ok.gov/obndd/documents/METH09-22.pdf">Meth Registry</a></li></ol><h3>Reports</h3><ol><li><a class="pdf-link" target="_blank" href="http://www.oscn.net/static/annual-report-2015.pdf">Annual Report</a></li><li><a href="http://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=468488">Statewide Registry of Licensed Private Process&nbsp;Servers</a></li><li><a href="/dockets/">District Court Reports</a></li></ol>										</li><li class="sub-nav-group span3"><h3>Self Help</h3><ol><li><a href="http://www.oscn.net/static/forms/aoc_forms/protectiveorders.asp">Protective Orders</a></li><li><a href="http://www.oscn.net/static/forms/childsupport.asp">Child Support</a></li><li><a class="pdf-link" target="_blank" href="http://www.oscn.net/forms/aoc_form/adobe/dom.-standard-visit-sch.-advis. gdelns.pdf">Standard Visitation Schedule & Advisory Guidelines</a></li><li><a class="external-link" target="_blank" href="http://oklaw.org/legal-aid-self-help-forms">Legal Aid Self-Help Forms</a></li></ol><h3>Related Links</h3><ol><li><a target="_blank" href="http://www.okbar.org/">Oklahoma Bar Association</a></li><li><a target="_blank" href="http://www.oklegislature.gov/">Oklahoma State Legislature</a></li><li><a target="_blank" href="http://www.state.ok.us/">Oklahoma Government Website</a></li><li><a target="_blank" href="https://www.sos.ok.gov/">Oklahoma Secretary of State</a></li><li><a target="_blank" href="http://www.judicialfamilyinstitute.org/">Judicial Family Institute</a></li><li><a target="_blank" href="http://www.ok.gov/governor/">Oklahoma Governor\'s Office</a></li><li><a target="_blank" href="http://www.okbar.org/public/Courts/CouncilonJudicialComplaints.aspx">Council on Judicial Complaints</a></li></ol></li><li class="sub-nav-group span3"><h3>Help</h3><ol><li><a href="http://www.oscn.net/applications/oscn/SimpleHelp.asp?HelpContextID=4">Court Records Help</a></li><li><a href="http://www.oscn.net/applications/oscn/SimpleHelp.asp?HelpContextID=14">Legal Research</a></li></ol></li></ol></div>';

$(courts).appendTo("#courts_menu");
$(news).appendTo("#news");
$(decisions).appendTo("#decisions");
$(programs).appendTo("#programs");
$(legalresearch).appendTo("#legal-research");
$(courtrecords).appendTo("#court-records");
$(quicklinks).appendTo("#quick-links");

} */










