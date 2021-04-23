


const startSceneName = 'start';

function initialize()
{
    MainController.scenes = {
        'start' : new ImageScene(['0'], 'Start', 'Assets/Images/Start.png', 500),
	
        '0' : new StandardScene(['1'], 'Answer call', '', 'Assets/Footage/0.mp4', 'Assets/Footage/0-idl.mp4'),
	
	'1' : new StandardScene(['2A', '2B'], 'Ask how the pain hurts others', 'Ask about history of mental illness', 'Assets/Footage/1.mp4', 'Assets/Footage/1-idl.mp4'),
	
	'2A' : new StandardScene(['3A', '3B'], 'Ask him to explain', 'Ask him to demonstrate', 'Assets/Footage/2A.mp4', 'Assets/Footage/2A-idl.mp4'),
	'2B' : new StandardScene(['3B', '3C'], 'Ask him to demonstrate', "Insist it's psychosomatic", 'Assets/Footage/2B.mp4', 'Assets/Footage/2B-idl.mp4'),
	
	'3A' : new StandardScene(['4C', '4A'], 'Try to calm him down', 'Suggest a guided meditation', 'Assets/Footage/3A.mp4', 'Assets/Footage/3A-idl.mp4'),
	'3B' : new StandardScene(['4C-intF3C', '4B-F3B'], 'Yes', 'No', 'Assets/Footage/3B.mp4', 'Assets/Footage/3B-idl.mp4'),
	'3C' : new StandardScene(['4B-F3C', '4D'], 'Believe him', "It's some kind of prank", 'Assets/Footage/3C.mp4', 'Assets/Footage/3C-idl.mp4'),
	
	'4A' : new StandardScene(['5A', '5B-normal'], 'He should tell people about it', 'He should keep it a secret', 'Assets/Footage/4A.mp4', 'Assets/Footage/4A-idl.mp4'),
	'4B-F3B' : new StandardScene(['5B-F4B-F3B', '5C-F4B-F3B'], 'He should tell people about it', 'He should keep it a secret', 'Assets/Footage/4B(F3B).mp4', 'Assets/Footage/4B(F3B)-idl.mp4'),
	'4B-F3C' : new StandardScene(['5B-normal', '5B-normal'], 'He should tell people about it', 'He should keep it a secret', 'Assets/Footage/4B(F3C).mp4', 'Assets/Footage/4B(F3C)-idl.mp4'),
	'4C-intF3C' : new AutoProgressScene(['4C'], 'Assets/Footage/4C(intF3C)'),
	'4C' : new StandardScene(['5B-normal', '5C-normal'], 'He should tell people about it', 'He should keep it a secret', 'Assets/Footage/4C.mp4', 'Assets/Footage/4C-idl.mp4'),
	'4D' : new StandardScene(['5F', '5D'], 'Call the police', 'Beg him to stop', 'Assets/Footage/4D.mp4', 'Assets/Footage/4D-idl.mp4'),
	'4B' : new StandardScene(['5B-F4B-F3B', '5C-F4B-F3B'], 'He should tell people about it', 'He should keep it a secret', 'Assets/Footage/4B.mp4', 'Assets/Footage/4B-idl.mp4'),
	
	'5A' : new AutoProgressScene(['end'], 'Assets/Footage/5A.mp4'),
	'5B-normal' : new AutoProgressScene(['end'], 'Assets/Footage/5B(normal).mp4'),
	'5B-F4B-F3B' : new AutoProgressScene(['end'], 'Assets/Footage/5B(F4B(F3B)).mp4'),
	'5C-normal' : new AutoProgressScene(['end'], 'Assets/Footage/5C(normal).mp4'),
	'5D' : new AutoProgressScene(['end'], 'Assets/Footage/5D.mp4'),
	'5F' : new AutoProgressScene(['end'], 'Assets/Footage/5F.mp4'),
	
	'end' : new ImageScene(['restart'], 'Restart', 'Assets/Images/End.png', 1000),
	'restart' : new RestartScene([])
    };


    MainController.scenes[startSceneName].prepare();
    MainController.startScene(startSceneName);
}
