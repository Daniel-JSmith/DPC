


const startSceneName = 'start';

function initialize()
{
    MainController.scenes = {
        'start' : new ImageScene(['0'], 'START', 'Assets/Images/Title.png', 250),
	
        '0' : new StandardScene(['1'], 'ANSWER CALL', '', 'Assets/Footage/0.mp4', 'Assets/Footage/0-idl.mp4'),
	
	'1' : new StandardScene(['2A', '2B'], 'ASK HOW THE PAIN HURTS OTHERS', 'ASK ABOUT HISTORY OF MENTAL ILLNESS', 'Assets/Footage/1.mp4', 'Assets/Footage/1-idl.mp4'),
	
	'2A' : new StandardScene(['3A', '3B'], 'ASK HIM TO EXPLAIN', 'ASK HIM TO DEMONSTRATE', 'Assets/Footage/2A.mp4', 'Assets/Footage/2A-idl.mp4'),
	'2B' : new StandardScene(['3B', '3C'], 'ASK HIM TO DEMONSTRATE', "INSIST IT'S PSYCHOSOMATIC", 'Assets/Footage/2B.mp4', 'Assets/Footage/2B-idl.mp4'),
	
	'3A' : new StandardScene(['4C', '4A'], 'TRY TO CALM HIM DOWN', 'SUGGEST A GUIDED MEDITATION', 'Assets/Footage/3A.mp4', 'Assets/Footage/3A-idl.mp4'),
	'3B' : new StandardScene(['4B-F3B', '4C-intF3C'], 'YES', 'NO', 'Assets/Footage/3B.mp4', 'Assets/Footage/3B-idl.mp4'),
	'3C' : new StandardScene(['4B-F3C', '4D'], 'BELIEVE HIM', "IT'S SOME KIND OF PRANK", 'Assets/Footage/3C.mp4', 'Assets/Footage/3C-idl.mp4'),
	
	'4A' : new StandardScene(['5A', '5B-normal'], 'HE SHOULD TELL PEOPLE ABOUT IT', 'HE SHOULD KEEP IT A SECRET', 'Assets/Footage/4A.mp4', 'Assets/Footage/4A-idl.mp4'),
	'4B-F3B' : new StandardScene(['5C-F4B-F3B', '5B-F4B-F3B'], 'HE SHOULD TELL PEOPLE ABOUT IT', 'HE SHOULD KEEP IT A SECRET', 'Assets/Footage/4B(F3B).mp4', 'Assets/Footage/4B(F3B)-idl.mp4'),
	'4B-F3C' : new StandardScene(['5B-normal', '5B-normal'], 'HE SHOULD TELL PEOPLE ABOUT IT', 'HE SHOULD KEEP IT A SECRET', 'Assets/Footage/4B(F3C).mp4', 'Assets/Footage/4B(F3C)-idl.mp4'),
	'4C-intF3C' : new AutoProgressScene(['4C'], 'Assets/Footage/4C(intF3C).mp4'),
	'4C' : new StandardScene(['5C-normal', '5B-normal'], 'HE SHOULD TELL PEOPLE ABOUT IT', 'HE SHOULD KEEP IT A SECRET', 'Assets/Footage/4C.mp4', 'Assets/Footage/4C-idl.mp4'),
	'4D' : new StandardScene(['5F', '5D'], 'CALL THE POLICE', 'BEG HIM TO STOP', 'Assets/Footage/4D.mp4', 'Assets/Footage/4D-idl.mp4'),
	'4B' : new StandardScene(['5B-F4B-F3B', '5C-F4B-F3B'], 'HE SHOULD TELL PEOPLE ABOUT IT', 'HE SHOULD KEEP IT A SECRET', 'Assets/Footage/4B.mp4', 'Assets/Footage/4B-idl.mp4'),
	
	'5A' : new AutoProgressScene(['5AEnd'], 'Assets/Footage/5A.mp4'),
	'5B-normal' : new AutoProgressScene(['5BEnd'], 'Assets/Footage/5B(Normal).mp4'),
	'5B-F4B-F3B' : new AutoProgressScene(['5BEnd'], 'Assets/Footage/5B(F4B(F3B)).mp4'),
	'5C-normal' : new AutoProgressScene(['5CEnd'], 'Assets/Footage/5C(Normal).mp4'),
	'5C-F4B-F3B' : new AutoProgressScene(['5CEnd'], 'Assets/Footage/5C(F4B(F3B)).mp4'),
	'5D' : new AutoProgressScene(['5DEnd'], 'Assets/Footage/5D.mp4'),
	'5F' : new AutoProgressScene(['5FEnd'], 'Assets/Footage/5F.mp4'),
	
	'5AEnd' : new TimeProgressScene(['credits'], 'Assets/Images/5A_End.png', 1000, 3000, 1000),
	'5BEnd' : new TimeProgressScene(['credits'], 'Assets/Images/5B_End.png', 1000, 3000, 1000),
	'5CEnd' : new TimeProgressScene(['credits'], 'Assets/Images/5C_End.png', 1000, 3000, 1000),
	'5DEnd' : new TimeProgressScene(['credits'], 'Assets/Images/5D_End.png', 1000, 3000, 1000),
	'5FEnd' : new TimeProgressScene(['credits'], 'Assets/Images/5F_End.png', 1000, 3000, 1000),

	'credits' : new TimeProgressScene(['restart'], 'Assets/Images/Credits.png', 1000, 7000, 1000),
	'restart' : new RestartScene([])
    };


    MainController.scenes[startSceneName].prepare();
    MainController.startScene(startSceneName);
}
