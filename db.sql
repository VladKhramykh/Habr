-- create database HABR;
-- drop database HABR;
-- use HABR;
-- use master;

-- asd asasdasd


IF OBJECT_ID('[posts]', 'U') IS NOT NULL DROP TABLE [posts];
IF OBJECT_ID('[subcategories]', 'U') IS NOT NULL DROP TABLE [subcategories];
IF OBJECT_ID('[categories]', 'U') IS NOT NULL DROP TABLE [categories];
IF OBJECT_ID('[users]', 'U') IS NOT NULL DROP TABLE [users];
IF OBJECT_ID('[users]', 'U') IS NOT NULL DROP TABLE [users];
                                                                                                                                                                                                                                          D
ATETIMEOFFSET NOT NULL, [activationCode] NVARCHAR(255) NULL, [password] NVARCHAR(255) NULL, [role] NVARCHAR(255) NOT NULL, [createdAt] DATETIMEOFFSET NOT NULL, [updatedAt] DATETIMEOFFSET NOT NULL, PRIMARY KEY ([id]));
EXEC sys.sp_helpindex @objname = N'[users]';
IF OBJECT_ID('[categories]', 'U') IS NOT NULL DROP TABLE [categories];
IF OBJECT_ID('[categories]', 'U') IS NULL CREATE TABLE [categories] ([id] INTEGER NOT NULL IDENTITY(1,1) , [name] NVARCHAR(255) NOT NULL, [createdAt] DATETIMEOFFSET NOT NULL, [updatedAt] DATETIMEOFFSET NOT NULL, PRIMARY KEY ([id]));
EXEC sys.sp_helpindex @objname = N'[categories]';
IF OBJECT_ID('[subcategories]', 'U') IS NOT NULL DROP TABLE [subcategories];
IF OBJECT_ID('[subcategories]', 'U') IS NULL CREATE TABLE [subcategories] ([id] INTEGER NOT NULL IDENTITY(1,1) , [name] NVARCHAR(255) NOT NULL, [createdAt] DATETIMEOFFSET NOT NULL, [updatedAt] DATETIMEOFFSET NOT NULL, [category] INTEGER NULL, PRIMARY KEY ([id]), FOREIGN KEY ([category]) REFERENCES [categories] ([id]) ON DELETE SET NULL);
EXEC sys.sp_helpindex @objname = N'[subcategories]';
IF OBJECT_ID('[posts]', 'U') IS NOT NULL DROP TABLE [posts];
IF OBJECT_ID('[posts]', 'U') IS NULL CREATE TABLE [posts] ([id] INTEGER NOT NULL IDENTITY(1,1) , [title] NVARCHAR(255) NOT NULL, [text] NVARCHAR(255) NOT NULL, [countOfViews] INTEGER NOT NULL, [createdAt] DATETIMEOFFSET NOT NULL, [updatedAt] DATETIMEOFFSET NOT NULL, [author] INTEGER NULL, [category] INTEGER NULL, [subcategory] INTEGER NULL, PRIMARY KEY ([id]), FOREIGN KEY ([author]) REFERENCES [users] ([id]) ON DELETE SET NULL, FOREIGN KEY ([cat
egory]) REFERENCES [categories] ([id]) ON DELETE SET NULL, FOREIGN KEY ([subcategory]) REFERENCES [subcategories] ([id]) ON DELETE SET NULL);
EXEC sys.sp_helpindex @objname = N'[posts]';

--  asdasd

IF OBJECT_ID('[users]', 'U') IS NULL CREATE TABLE [users] 
(
		[id] INTEGER NOT NULL IDENTITY(1,1) ,
		[firstName] NVARCHAR(255) NOT NULL,
		[secondName] NVARCHAR(255) NOT NULL,
		[email] NVARCHAR(255) NOT NULL,
		[activationCode] NVARCHAR(255) NULL,
		[password] NVARCHAR(255) NULL,
		[role] NVARCHAR(255) NOT NULL default 'user',
		[createdAt] DATETIMEOFFSET NOT NULL,
	    [updatedAt] DATETIMEOFFSET NOT NULL,
		PRIMARY KEY ([id])
);
EXEC sys.sp_helpindex @objname = N'[users]';

IF OBJECT_ID('[categories]', 'U') IS NULL CREATE TABLE [categories] 
(
		[id] INTEGER NOT NULL IDENTITY(1,1) , 
		[name] NVARCHAR(255) NOT NULL, 
		[createdAt] DATETIMEOFFSET NOT NULL, 
		[updatedAt] DATETIMEOFFSET NOT NULL, 
		PRIMARY KEY ([id])
);
EXEC sys.sp_helpindex @objname = N'[categories]';

IF OBJECT_ID('[subcategories]', 'U') IS NULL CREATE TABLE [subcategories]
(
		[id] INTEGER NOT NULL IDENTITY(1,1) ,
		[name] NVARCHAR(255) NOT NULL,
		[createdAt] DATETIMEOFFSET NOT NULL,
		[updatedAt] DATETIMEOFFSET NOT NULL,
		[category] INTEGER NULL,
		PRIMARY KEY ([id]),
		FOREIGN KEY ([category]) REFERENCES [categories] ([id]) ON DELETE SET NULL,
		FOREIGN KEY ([subcategory]) REFERENCES [subcategories] ([id]) ON DELETE SET NULL)
);
EXEC sys.sp_helpindex @objname = N'[subcategories]';

IF OBJECT_ID('[posts]', 'U') IS NULL CREATE TABLE [posts] 
(
		[id] INTEGER NOT NULL IDENTITY(1,1) , 
		[title] NVARCHAR NOT NULL,
		[text] NVARCHAR(255) NOT NULL, 
		[countOfViews] INTEGER NOT NULL, 
		[createdAt] DATETIMEOFFSET NOT NULL, 
		[updatedAt] DATETIMEOFFSET NOT NULL, 
		[author] INTEGER NULL, 
		[category] INTEGER NULL,
		[subcategory] INTEGER NULL,
		PRIMARY KEY ([id]), 
		FOREIGN KEY ([author]) REFERENCES [users] ([id]) ON DELETE SET NULL, 
		FOREIGN KEY ([category]) REFERENCES [categories] ([id]) ON DELETE SET NULL,
		FOREIGN KEY ([subcategory]) REFERENCES [subcategories] ([id]) ON DELETE SET NULL
);
EXEC sys.sp_helpindex @objname = N'[posts]';

select * from categories;
SELECT [post_category].[name], count([posts].[id]) FROM [posts] AS [posts] LEFT OUTER JOIN [categories] AS [post_category]
 ON [posts].[category] = [post_category].[id] WHERE [posts].[author] = N'1' GROUP BY [post_category].[name];


-- stored procedures
-- getFullPostById
create or alter procedure getFullPostById
@id int
as
begin
	select top(1)	p.id, p.title, p.text, p.createdAt, p.updatedAt, 
					u.id as 'userId', u.firstName as 'userFirstName', u.secondName as 'userSecondName', u.email as 'userEmail',
					c.id as 'categoryId', c.name as 'categoryName',
					sc.id as 'subcategoryId', sc.name as 'subcategoryName' 
		from posts p 
			left join categories c on p.category = c.id
			left join users u on p.author = u.id
			left join subcategories sc on p.subcategory= sc.id
		where p.id = @id;
end;

select * from posts

 -- getContributionsToHubsByUserId
create or alter procedure getContributionsToHubsByUserId
@id int
as
begin
	select c.name as 'hubName', count(p.id) as 'count' from posts p left join categories c on p.category = c.id  where p.author = 1 group by c.name;
end;