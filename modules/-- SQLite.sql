-- SQLite

--
-- Table structure for table `evaluations`
--

DROP TABLE IF EXISTS `evaluations`;
CREATE TABLE `evaluations` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
);

--
-- Table structure for table `results`
--
DROP TABLE IF EXISTS `results`;
CREATE TABLE `results` (
  `student_id` int(11) NOT NULL,
  `eval_id` int(11) NOT NULL,
  `note` int(11) NOT NULL
);

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
);

insert into 'students'('id','first_name','last_name','email') 
values (1,'Cedric','Charles','cedric@gmail.com')

insert into 'students'('id','first_name','last_name','email') 
values (2,'Bob','AvecCheveux','bob@gmail.com')

insert into 'students'('id','first_name','last_name','email') 
values (3,'Firstname','Lastname','firstlastname@gmail.com')

insert into 'evaluations'('id','name') values(1,'exam1')
insert into 'evaluations'('id','name') values(2,'exam2')
insert into 'evaluations'('id','name') values(3,'exam3')

insert into 'results'('student_id','eval_id','note') values(1,1,90)
insert into 'results'('student_id','eval_id','note') values(1,2,67)
insert into 'results'('student_id','eval_id','note') values(1,3,76)

insert into 'results'('student_id','eval_id','note') values(2,1,92)
insert into 'results'('student_id','eval_id','note') values(2,2,12)
insert into 'results'('student_id','eval_id','note') values(2,3,96)

insert into 'results'('student_id','eval_id','note') values(3,1,60)
insert into 'results'('student_id','eval_id','note') values(3,2,77)
insert into 'results'('student_id','eval_id','note') values(3,3,28)
