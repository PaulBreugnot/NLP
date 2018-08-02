Search.setIndex({docnames:["analysis","classes","index","introduction","learning","load","other_examples","process","requirements","utils"],envversion:53,filenames:["analysis.rst","classes.rst","index.rst","introduction.rst","learning.rst","load.rst","other_examples.rst","process.rst","requirements.rst","utils.rst"],objects:{"loacore.analysis":{frequencies:[0,0,0,"-"],pattern_recognition:[0,0,0,"-"],polarity_check:[0,0,0,"-"],sentiment_analysis:[0,0,0,"-"]},"loacore.analysis.frequencies":{bigram_label_frequencies:[0,1,1,""],bigram_pos_tag_frequencies:[0,1,1,""],count_bigram_label:[0,1,1,""],count_bigram_pos_tag:[0,1,1,""],count_label:[0,1,1,""],count_pos_tag:[0,1,1,""],get_bigram_label_set:[0,1,1,""],get_bigram_pos_tag_set:[0,1,1,""],get_label_set:[0,1,1,""],get_polarity_label_set:[0,1,1,""],get_polarity_pos_tag_set:[0,1,1,""],get_pos_tag_set:[0,1,1,""],label_frequencies:[0,1,1,""],polarity_word_label_frequencies:[0,1,1,""],polarity_word_pos_tag_frequencies:[0,1,1,""],pos_tag_frequencies:[0,1,1,""]},"loacore.analysis.pattern_recognition":{adj_pattern_table:[0,1,1,""],general_pattern_recognition:[0,1,1,""],label_patterns_recognition:[0,1,1,""],pos_tag_patterns_recognition:[0,1,1,""],verb_context_table:[0,1,1,""]},"loacore.analysis.polarity_check":{check_polarity:[0,1,1,""],write_polarity_check:[0,1,1,""]},"loacore.analysis.sentiment_analysis":{compute_extreme_files_polarity:[0,1,1,""],compute_extreme_reviews_polarity:[0,1,1,""],compute_simple_files_polarity:[0,1,1,""],compute_simple_reviews_polarity:[0,1,1,""]},"loacore.classes.classes":{DepTree:[1,2,1,""],DepTreeNode:[1,2,1,""],File:[1,2,1,""],Polarity:[1,2,1,""],Review:[1,2,1,""],Sentence:[1,2,1,""],Synset:[1,2,1,""],Word:[1,2,1,""]},"loacore.classes.classes.DepTree":{dep_tree_str:[1,3,1,""]},"loacore.classes.classes.File":{load:[1,3,1,""],sentence_list:[1,3,1,""],sentence_list_from_files:[1,4,1,""]},"loacore.classes.classes.Polarity":{is_negative:[1,3,1,""],is_objective:[1,3,1,""],is_positive:[1,3,1,""]},"loacore.classes.classes.Review":{review_str:[1,3,1,""]},"loacore.classes.classes.Sentence":{compute_freeling_sentence:[1,3,1,""],sentence_str:[1,3,1,""]},"loacore.classes.classes.Word":{colored_word:[1,3,1,""],compute_freeling_word:[1,3,1,""]},"loacore.learning":{svm:[4,0,0,"-"],word_embeddings:[4,0,0,"-"]},"loacore.learning.svm":{commit_analysis:[4,1,1,""],get_labels_vector:[4,1,1,""],learn_model:[4,1,1,""]},"loacore.learning.word_embeddings":{get_tokens_list:[4,1,1,""],review_2_vec:[4,1,1,""],reviews_2_vec:[4,1,1,""],word_2_vec:[4,1,1,""]},"loacore.load":{deptree_load:[5,0,0,"-"],file_load:[5,0,0,"-"],lemma_load:[5,0,0,"-"],review_load:[5,0,0,"-"],sentence_load:[5,0,0,"-"],synset_load:[5,0,0,"-"],word_load:[5,0,0,"-"]},"loacore.load.deptree_load":{load_dep_tree_in_sentences:[5,1,1,""],load_dep_trees:[5,1,1,""]},"loacore.load.file_load":{clean_db:[5,1,1,""],get_id_files_by_file_paths:[5,1,1,""],load_database:[5,1,1,""],remove_files:[5,1,1,""]},"loacore.load.lemma_load":{load_lemmas:[5,1,1,""],load_lemmas_in_words:[5,1,1,""]},"loacore.load.review_load":{load_reviews:[5,1,1,""],load_reviews_by_id_files:[5,1,1,""],load_reviews_in_files:[5,1,1,""]},"loacore.load.sentence_load":{load_sentences:[5,1,1,""],load_sentences_by_id_files:[5,1,1,""],load_sentences_in_reviews:[5,1,1,""]},"loacore.load.synset_load":{load_synsets:[5,1,1,""],load_synsets_in_words:[5,1,1,""]},"loacore.load.word_load":{load_words:[5,1,1,""],load_words_in_dep_trees:[5,1,1,""],load_words_in_sentences:[5,1,1,""]},"loacore.process":{deptree_process:[7,0,0,"-"],file_process:[7,0,0,"-"],lemma_process:[7,0,0,"-"],review_process:[7,0,0,"-"],sentence_process:[7,0,0,"-"],synset_process:[7,0,0,"-"]},"loacore.process.deptree_process":{add_dep_tree_from_sentences:[7,1,1,""]},"loacore.process.file_process":{add_files:[7,1,1,""]},"loacore.process.lemma_process":{add_lemmas_to_sentences:[7,1,1,""]},"loacore.process.review_process":{add_reviews_from_files:[7,1,1,""],normalize:[7,1,1,""]},"loacore.process.sentence_process":{add_sentences_from_reviews:[7,1,1,""]},"loacore.process.synset_process":{add_polarity_to_synsets:[7,1,1,""],add_synsets_to_sentences:[7,1,1,""]},"loacore.utils":{file_writer:[9,0,0,"-"],plot_frequencies:[9,0,0,"-"],plot_polarities:[9,0,0,"-"],print_patterns:[9,0,0,"-"]},"loacore.utils.plot_frequencies":{frequencies_bar_chart:[9,1,1,""],write_frequencies:[9,1,1,""]},"loacore.utils.plot_polarities":{print_polarity_table:[9,1,1,""],save_polarity_pie_charts:[9,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:staticmethod"},terms:{"boolean":[0,1,5,7,9],"case":[5,7],"class":[2,4],"default":[0,1,7,8,9],"float":[0,1,9],"function":[0,1,5,7,9],"import":[0,1,5,6,9],"instalaci\u00f3n":5,"int":[0,1,5,9],"long":7,"new":7,"return":[0,1,4,5,7],"se\u00f1ora":0,"static":1,"true":[0,1,4,5,7,9],For:[0,4,5,8],Ids:5,PoS:0,The:[0,1,3,5,7,8,9],Useful:2,_pqr:0,a_polar:0,about:[0,5],accord:[0,4,7],accordingli:0,actual:[7,9],add:[4,7],add_dep_tree_from_sent:7,add_fil:7,add_lemmas_to_sent:7,add_polarity_to_synset:7,add_reviews_from_fil:7,add_sentences_from_review:7,add_synsets_to_sent:7,added:[0,1,7],adj:0,adj_pattern_t:0,adjac:0,adject:[0,6],after:0,agua:[5,6],algorithm:7,all:[0,1,4,5,6,7,9],allow:[0,3,9],alreadi:[0,1,7,8],also:[0,5,7,9],amazon_cells_label:0,among:[0,5],analys:2,analysi:[1,2,3,4,6,7,9],analysis_to_check:0,ani:7,annex:1,api:[3,8],append:7,appli:[0,7],aq0cp00:6,aq0cs00:[0,5,6],aq0fs00:[0,6],aq0ms00:0,arbitrarili:9,argument:[0,5,7],argumentando:0,arrai:4,assign:1,associ:[0,1,7],assum:0,asufr:5,atencion:[0,6],atiend:0,atiendan:0,attribut:[1,5],automat:[5,7],avail:0,avoid:[1,7],backend:3,bail:5,bailar:5,bajar:0,balneario2:5,base:4,basic:[0,1,7],becaus:1,been:[0,1,5],befor:[0,7],begin:0,better:7,between:0,bigram:[0,9],bigram_label:0,bigram_label_frequ:[0,9],bigram_pos_tag:0,bigram_pos_tag_frequ:0,black:1,buena:6,bueno:6,calentar:5,calidad:6,calient:5,call:[0,1,5,8,9],caminata:5,can:[0,1,5,7],cat:0,charact:0,chart:9,check:[2,5,8],check_polar:0,child:[0,6],children:[0,1],chosen:0,classic:0,classif:[0,4],clean_db:5,clf:4,clic:0,code:[0,3],colmo:0,colombia:3,color:[0,1],colored_polar:[0,1],colored_word:1,column:9,com:[],come:1,comment:3,commit:[0,4],commit_analysi:4,commit_polar:0,common:[0,9],commut:0,como:0,compar:0,complement:0,complet:5,compound:0,comput:[0,1,7,8],compute_extreme_files_polar:0,compute_extreme_reviews_polar:0,compute_freeling_sent:1,compute_freeling_word:1,compute_simple_files_polar:0,compute_simple_reviews_polar:0,con:0,condid:0,confus:7,conn:0,connect:0,consid:[0,9],consist:0,constitut:0,contain:7,content:[0,2,7,8],context:[0,7],context_length:0,contratar:0,conveni:1,convers:[1,7],convert:[1,7],coord:[5,6],corpu:[0,3,7],correct:0,correspond:[0,1,5,7,8,9],could:[0,1,9],count:0,count_bigram_label:0,count_bigram_pos_tag:0,count_label:0,count_pos_tag:0,creat:9,current:[4,7],cursor:0,data:[2,7,9],databas:[0,1,2,4,6],dataset:[1,4],db_commit:4,db_path:0,dedic:8,defin:0,dejan:0,delet:5,dep_tre:[1,5,6],dep_tree_nod:1,dep_tree_str:[1,5],depenc:3,depend:[0,1,5,6],deptre:[0,2,4],deptree_load:5,deptree_process:7,deptree_str:5,deptreenod:[0,2,4],describ:8,detail:[0,1,7],detect:0,develop:[0,3,9],dict:[0,9],dictionari:[0,4,9],dictionnari:4,differ:[0,1],dimension:0,directli:1,directori:[0,7,9],directory_path:0,dirnam:7,dirpath:7,disambigu:0,displai:[0,6,9],distribut:8,doc:[5,8],document:8,doesn:9,don:0,due:0,each:[0,1,4,5,7],easiest:0,easili:3,editor:0,edu:[0,8],effici:0,element:0,ella:0,embed:8,empti:5,encod:[1,7],encuestatemporadabajafinalbalneario2_cc:5,encuestatemporadabajafinalbalneario2_eo:5,encuestatemporadabajafinalbalneario2_gr:5,end:1,engend:5,entri:0,era:0,espacio:0,especi:4,establec:0,even:[1,7,8],eventu:0,everi:7,exampl:[0,1,2,3,5,7,8,9],excel:1,except:7,exist:[0,9],explan:0,express:[5,7],extern:8,extrem:0,fals:[0,1,4,5,7,9],false_neg:0,false_posit:0,fast:5,feed:2,few:[5,7,8],fiel:0,field:0,figur:9,file:[0,2,4,6,7,8,9],file_index:1,file_load:[0,5,6,9],file_nam:[0,9],file_path:[1,5,7,9],file_paths_r:5,file_process:7,file_score_dict:9,filenam:7,files_frequ:9,find:[0,5],first:[0,5,7,9],firstli:7,fit:7,fix:8,folder:[0,5,8,9],follow:[0,1],form:[1,4],found:[0,4],freel:[0,1,2,3],freeling_lang:0,freeling_sent:1,freeling_word:1,freq:[0,9],frequenc:[2,9],frequencies_bar_chart:9,fria:5,from:[0,1,2,4,6,7,8,9],fucntion:4,full:[5,7],func:0,gener:[0,1,8],general_pattern_recognit:0,gensim:[],gerundi:0,get:1,get_bigram_label_set:0,get_bigram_pos_tag_set:0,get_id_files_by_file_path:[0,5,9],get_label_set:0,get_labels_vector:4,get_polarity_label_set:0,get_polarity_pos_tag_set:0,get_pos_tag_set:0,get_tokens_list:4,gitbook:[0,7,8],give:4,goal:3,good:1,grand:5,graph:9,graphic:8,green:1,grosera:0,group:3,grup:5,gui:[8,9],handl:7,hard:3,has:0,have:[0,1,5,6,7],here:0,high:3,home:[0,9],hotel:3,how:[0,5],howev:7,html:[0,5,7,8],http:[0,5,7,8],huela:5,huge:0,id_dep_tre:[1,5],id_dep_tree_nod:1,id_fil:[0,1,5,9],id_lemma:[1,5],id_path:5,id_polar:1,id_review:[1,5],id_sent:[1,5],id_synset:[1,5],id_word:[1,5],idea:0,identifi:[0,1],ids:[0,5,9],igual:0,imdb_label:0,implement:5,improv:8,includ:8,index:1,inform:5,initi:0,insid:7,instal:8,instalacion:5,instanc:1,instead:5,interest:[0,9],introduct:2,involv:3,irrespetuosa:0,is_neg:[1,4],is_object:[1,4],is_posit:[1,4],its:[0,1],itself:1,join:[7,9],kept:[0,9],keyedvector:4,label:[0,1,4,7,9],label_displai:0,label_frequ:[0,9],label_patterns_recognit:0,lang:[0,7],languag:[0,3,7,8],las:5,lead:3,learn:2,learn_model:4,least:[0,6,7],lemma:[1,2,4,7],lemma_load:5,lemma_process:7,len:5,length:0,letter:0,level:3,librari:[3,5,8],like:[0,1,7,9],line:7,linearsvc:4,link:7,linux:[0,8],list:[0,1,4,5,7],loacor:[0,1,4,5,6,7,9],load:[0,1,2,6,7,9],load_databas:[0,5,6,9],load_dep_tre:5,load_dep_tree_in_sent:5,load_deptre:[0,5],load_lemma:5,load_lemmas_in_word:5,load_polar:5,load_review:[0,5,9],load_reviews_by_id_fil:[0,5],load_reviews_in_fil:5,load_sent:[0,1,5],load_sentences_by_id_fil:[0,5],load_sentences_in_review:5,load_synset:5,load_synsets_in_word:5,load_word:[0,5],load_words_in_dep_tre:5,load_words_in_sent:5,local:8,lower:7,lsi:8,machin:2,mai:7,make:7,manag:8,manera:0,manual:[0,7,8],map:[0,9],mas:5,match:[0,5],matplotlib:[8,9],mean:[0,4,9],mejor:0,might:8,minut:7,mod:0,model:4,modifi:0,modul:[0,7,8],moin:8,moment:5,more:[0,5,7],moreov:1,most:[0,5,9],movi:3,mui:6,n_polar:0,n_polat:0,name:[0,7,9],natur:[0,6],nccs000:[0,5,6],ncfp000:5,ncfs000:[0,5,6],ncms000:[0,5,6],necessari:7,necessarili:[0,9],need:[0,5,8],neg:[0,1,7,9],neg_scor:[0,1,9],negat:0,next:8,nlp:[3,8],nltk:3,node:[0,1,5,6],none:[0,1,5,6],normal:0,notabl:0,noth:0,notic:[0,7,8,9],noun:0,now:8,number:[0,9],numpi:4,obj:0,obj_scor:[0,1,9],object:[0,1,7,9],obtain:[1,4],occurr:0,oler:5,one:[0,5,6],onli:[0,1,5,7,8,9],optimist:0,option:[0,8],order:9,org:[5,8],orientar:0,origin:[0,3,9],other:[0,2,3,5,9],otherwis:[0,1,4,5],our:7,packag:[2,8],page:8,paisaj:6,paramet:[0,1,4,5,7,9],parec:0,parent:0,parqueadero:5,part:[0,1],path:[0,1,5,7,9],pattern:[2,6],pattern_adj:0,pattern_adj_cc:0,pattern_cc:0,pattern_recognit:[0,6],patterns_str:0,paulbreugnot:[0,9],pdf:[8,9],percentag:0,pereira:3,perform:[0,7],pessimist:0,pie:9,pista:5,plot:2,plot_frequ:9,plot_polar:[0,9],podia:0,polar:[2,4,7,9],polarity_check:0,polarity_commuter_onli:0,polarity_pie_chart:9,polarity_word_label_frequ:0,polarity_word_pos_tag_frequ:0,poner:0,pos_scor:[0,1,9],pos_tag:[0,1,7],pos_tag_displai:0,pos_tag_frequ:0,pos_tag_patterns_recognit:[0,6],posit:[0,1,7,9],possibl:[0,1,7],predict:4,present:9,prettyt:8,previous:0,print:[0,1,5,6,7,9],print_dep_tre:6,print_lemma:7,print_pattern:0,print_polarity_t:[0,9],print_result:7,print_sent:[5,6],print_synset:7,process:[0,1,2,3,4,5,8],product:3,program:8,project:[3,8],promueven:0,provid:[0,3,9],pyfreel:1,pypi:8,python3:8,python:[0,3,5,7,8,9],que:[0,5],quier:0,quit:[5,7],radimrehurek:[],rang:5,rate:0,raw:[2,5,9],realiz:[0,1],reason:0,recogn:0,recognit:2,red:1,reduc:5,ref:[0,4],refer:[0,1,4,5],referenc:1,regular:[5,7],rel:7,relev:0,remov:5,remove_fil:5,repres:[0,1,4],represent:[1,4,7],request:0,requir:2,research:3,reserva:6,restaur:3,restrict:9,result:[0,1,2,4,6,7,8],result_path:9,retriev:5,review:[0,3,4,6],review_2_vec:4,review_index:1,review_load:[0,5],review_process:7,review_str:1,reviews_2_vec:4,right:9,root:[1,6],round:9,rtype:1,run:3,same:0,save:[2,5,8],save_polarity_pie_chart:9,scikit:[],score:[0,9],scratch:7,sea:5,see:[0,1,5,7],select:0,self:1,sens:0,sentenc:[0,2,4,6,7],sentence_index:1,sentence_list:[0,1],sentence_list_from_fil:1,sentence_load:[0,1,5],sentence_process:7,sentence_str:[1,5],sentiment:[2,3],sentiment_analysi:[0,9],sentiwordnet:[1,7],servicio:5,set:[0,1,5,9],should:[0,1,5,7,8,9],show:[0,8,9],significantli:5,simpl:0,sklearn:[],some:1,sourc:[0,1,8],spanish:0,spec:[5,6],special:3,specifi:[0,1,4,5,7,9],speech:[0,1],sql:[0,1],sqlite3:[0,8],sqlite:8,stabl:[],start:1,still:3,store:[0,1,8],string:[0,1,4,5,7,9],structur:[0,5],subject:0,suj:0,sum:0,support:8,svm:2,synset:[0,2,4,7],synset_cod:[1,5],synset_load:5,synset_nam:[1,5],synset_process:7,system:[1,7],tabl:[0,1,5,7,9],tag:[0,1],tag_len:0,tagset:0,take:[0,5],talp:[0,7,8],tampoco:0,technich:3,teleferico:5,tempbaja:5,tencion:0,tend:0,termal:6,termin:0,terminal_print:0,text:7,thank:[0,7],thei:[0,5],them:[0,1,5,7,9],thi:[0,1,3,5,7,8,9],those:[0,5,9],through:[0,8],thu:3,time:[5,7],tkinter:8,toboganvi:5,token:4,tranquilidad:5,tree:[0,1,3,6],tupl:[0,9],turista:0,two:0,txt:[0,1,5,9],type:[0,1,4,5,7],uci:[0,5,9],uci_label_bigrams_frequ:9,ukb:7,under:3,unidimension:0,unigram:0,uniqu:7,univers:3,upc:[0,7,8],usag:7,use:[0,8],used:[0,1,4,5,7,8,9],useful:9,user:[0,7,8],uses:[1,8],using:[1,7,9],usr:8,utf:7,util:[0,2],uun:0,val_numb:9,valu:[0,7,9],variabl:1,variou:9,vector:4,verb:0,verb_context_t:0,verbal:0,viniera:0,visibl:0,vmg0000:0,vmip3p0:0,vmip3s0:0,vmn0000:0,vmsi3s0:0,vmsp3p0:0,vsii3s0:0,wai:1,walk:7,want:0,water:5,webfm_send:0,what:0,when:[1,5,9],wherea:0,which:[0,1,5,9],wiki:8,window:[1,7],without:[5,7],word2vec:2,word:[0,2,4,7],word_2_vec:4,word_embed:4,word_load:5,wordnet:[1,3],work:[1,5],workspac:[0,9],write:[0,9],write_frequ:9,write_polarity_check:0,written:0,yellow:1,yelp_label:0,you:[0,8],your:8,zona:0},titles:["Analyse data : <em>analysis</em> package","Classes","Loacore : Language and Opinion Analyzer for Comments and Reviews\u2019s documentation!","Introduction","Machine Learning","Load data from database : <em>load</em> package","Other Useful Examples","Feeding database : <em>process</em> package","Requirements","Save and plot results : <em>utils</em> package"],titleterms:{"class":1,Useful:6,analys:0,analysi:0,analyz:2,check:0,comment:2,data:[0,5],databas:[5,7,8],depend:7,deptre:[1,5],deptreenod:1,disambigu:7,document:2,exampl:6,feed:7,file:[1,5],freel:[7,8],frequenc:0,from:5,gener:7,introduct:3,languag:2,learn:4,lemma:5,lemmat:7,loacor:2,load:5,machin:4,normal:7,opinion:2,other:6,packag:[0,5,7,9],pattern:0,plot:9,polar:[0,1],process:7,raw:7,recognit:0,requir:8,result:9,review:[1,2,5,7],save:9,sentenc:[1,5],sentiment:0,split:7,svm:4,synset:[1,5],token:7,tree:7,util:[8,9],word2vec:4,word:[1,5]}})