import React from "react";
import Typewriter from 'typewriter-effect';
import "./styles/componentTwo.css"

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

const ComponentTwo = () => 
{

    const code = [
        'void quickSort(int arr[], int low, int high)',
        '{',
        '    if (low > high)',
        '    {',
        '        return;',
        '    }',
        '    int j = partition(arr, low, high);',
        '    quickSort(arr, low, j - 1);',
        '    quickSort(arr, j + 1, high);',
        '}',
        '',
        'int partition(int arr[], int l, int h)',
        '{',
        '    int pivot = arr[l];',
        '    int i = l;',
        '    int j = h;',
        '    while (i < j)',
        '    {',
        '        while (arr[i] <= pivot)',
        '        {',
        '            i++;',
        '        }',
        '        while (arr[j] > pivot)',
        '        {',
        '            j--;',
        '        }',
        '        if (i < j)',
        '        {',
        '            swap(arr[i], arr[j]);',
        '        }',
        '    }',
        '    swap(arr[l], arr[j]);',
        '    return j;',
        '}'
    ];
    
    const formattedCode = code.join('\n'); // Join the array elements with newline characters
 
    return (
        <>

        <div
            style={{  whiteSpace: 'pre',
            scrollbarWidth: 'thin',
            scrollbarColor: '#4C5ADF #011627',
            fontFamily: 'monospace', // Use a monospace font
            fontSize: '14px',
            fontColor: 'rgb(55,65,81)',
            boxShadow: '0 4px 8px 0 rgba(249, 248, 248, 0.1)'

            }}
            className="algo-screen  custom-scrollbar  hover:scale-[1.15] hover:duration-300 min-w-[500px]  w-[600px] h-[375px]  mr-6 border text-white rounded-[0.5rem] border-gray-700 bg-[#011627] text-left overflow-auto"
        >

                <div className="flex flex-row m-auto  text-center overflow-hidden items-center  w-full justify-center border-b border-gray-800 mb-2">
                    <h1 className=" font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                    <h1 className=" font-mono   font-semibold  text-[#4C5ADF] text-[42px] hover:duration-500 hover:rotate-[540deg] ">X</h1>
                    <h1 className="font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                </div>

                <pre className="m-auto ml-10 text-gray-300">
                    <Typewriter
                        options={{
                            strings:formattedCode,
                            autoStart:true,
                            delay:1,
                            deleteSpeed:1,
                            loop:true
                    }}
                    />
                </pre>

            </div>
        </>
    )
}

export default ComponentTwo;