SET SCHEMA WC2014;

DROP TYPE PAL_NOOFGOAL_DATA_T;
CREATE TYPE PAL_NOOFGOAL_DATA_T AS TABLE("ID" INT PRIMARY KEY, "RAWDATA" DOUBLE);

DROP TYPE PAL_NOOFGOAL_RESULT_T;
CREATE TYPE PAL_NOOFGOAL_RESULT_T AS TABLE("TIME" INT, "OUTPUT" DOUBLE);

DROP TYPE PAL_NOOFGOAL_CONTROL_T;
CREATE TYPE PAL_NOOFGOAL_CONTROL_T AS TABLE("NAME" VARCHAR(100), "INTARGS" INT, "DOUBLEARGS" DOUBLE, "STRINGARGS" VARCHAR(100));

DROP TABLE PAL_NOOFGOAL_PDATA_TBL;
CREATE COLUMN TABLE PAL_NOOFGOAL_PDATA_TBL("ID" INT,"TYPENAME" VARCHAR(100),"DIRECTION" VARCHAR(100));
INSERT INTO PAL_NOOFGOAL_PDATA_TBL VALUES (1,'WC2014.PAL_NOOFGOAL_DATA_T','in');
INSERT INTO PAL_NOOFGOAL_PDATA_TBL VALUES(2,'WC2014.PAL_NOOFGOAL_CONTROL_T','in'); 
INSERT INTO PAL_NOOFGOAL_PDATA_TBL VALUES(3,'WC2014.PAL_NOOFGOAL_RESULT_T','out');

GRANT SELECT ON WORLDCUP.PAL_NOOFGOAL_PDATA_TBL TO SYSTEM;

CALL SYSTEM.AFL_WRAPPER_ERASER('NOOFGOAL_TEST_PROC');
CALL SYSTEM.AFL_WRAPPER_GENERATOR('NOOFGOAL_TEST_PROC','AFLPAL','SINGLESMOOTH',PAL_NOOFGOAL_PDATA_TBL);

DROP TABLE PAL_NOOFGOAL_CONTROL_TBL;
CREATE COLUMN TABLE PAL_NOOFGOAL_CONTROL_TBL ("NAME" VARCHAR(100), "INTARGS" INT, "DOUBLEARGS" DOUBLE, "STRINGARGS" VARCHAR(100));
INSERT INTO PAL_NOOFGOAL_CONTROL_TBL VALUES ('RAW_DATA_COL',1,NULL,NULL);
INSERT INTO PAL_NOOFGOAL_CONTROL_TBL VALUES ('ALPHA', NULL,0.75,NULL);
INSERT INTO PAL_NOOFGOAL_CONTROL_TBL VALUES ('FORECAST_NUM',0, NULL,NULL);
INSERT INTO PAL_NOOFGOAL_CONTROL_TBL VALUES ('STARTTIME',0, NULL,NULL);

DROP TABLE PAL_NOOFGOAL_DATA_TBL;
CREATE COLUMN TABLE PAL_NOOFGOAL_DATA_TBL  LIKE  PAL_NOOFGOAL_DATA_T ;
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (0,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (1,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (2,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (3,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (4,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (5,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (6,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (7,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (8,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (9,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (10,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (11,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (12,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (13,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (14,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (15,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (16,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (17,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (18,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (19,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (20,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (21,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (22,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (23,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (24,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (25,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (26,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (27,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (28,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (29,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (30,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (31,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (32,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (33,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (34,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (35,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (36,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (37,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (38,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (39,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (40,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (41,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (42,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (43,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (44,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (45,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (46,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (47,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (48,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (49,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (50,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (51,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (52,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (53,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (54,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (55,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (56,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (57,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (58,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (59,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (60,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (61,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (62,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (63,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (64,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (65,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (66,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (67,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (68,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (69,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (70,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (71,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (72,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (73,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (74,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (75,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (76,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (77,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (78,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (79,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (80,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (81,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (82,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (83,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (84,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (85,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (86,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (87,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (88,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (89,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (90,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (91,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (92,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (93,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (94,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (95,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (96,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (97,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (98,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (99,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (100,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (101,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (102,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (103,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (104,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (105,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (106,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (107,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (108,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (109,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (110,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (111,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (112,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (113,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (114,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (115,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (116,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (117,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (118,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (119,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (120,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (121,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (122,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (123,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (124,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (125,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (126,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (127,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (128,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (129,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (130,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (131,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (132,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (133,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (134,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (135,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (136,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (137,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (138,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (139,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (140,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (141,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (142,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (143,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (144,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (145,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (146,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (147,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (148,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (149,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (150,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (151,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (152,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (153,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (154,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (155,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (156,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (157,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (158,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (159,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (160,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (161,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (162,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (163,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (164,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (165,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (166,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (167,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (168,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (169,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (170,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (171,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (172,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (173,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (174,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (175,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (176,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (177,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (178,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (179,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (180,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (181,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (182,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (183,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (184,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (185,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (186,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (187,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (188,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (189,0.0);
INSERT INTO PAL_NOOFGOAL_DATA_TBL VALUES (190,0.0);

DROP TABLE PAL_NOOFGOAL_RESULT_TBL;
CREATE COLUMN TABLE PAL_NOOFGOAL_RESULT_TBL  LIKE PAL_NOOFGOAL_RESULT_T ;

--CALL _SYS_AFL.NOOFGOAL_TEST_PROC(PAL_NOOFGOAL_DATA_TBL, "PAL_NOOFGOAL_CONTROL_TBL", PAL_NOOFGOAL_RESULT_TBL) WITH OVERVIEW;
--SELECT * FROM PAL_NOOFGOAL_RESULT_TBL;
