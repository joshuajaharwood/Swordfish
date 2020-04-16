/*****************************************************************************
Copyright (c) 2007-2020 - Maxprograms,  http://www.maxprograms.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to compile,
modify and use the Software in its executable form without restrictions.

Redistribution of this Software or parts of it in any form (source code or
executable binaries) requires prior written permission from Maxprograms.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*****************************************************************************/

var _am = require('electron');

class AddMemory {

    constructor() {
        _am.ipcRenderer.send('get-theme');
        _am.ipcRenderer.on('set-theme', (event, arg) => {
            (document.getElementById('theme') as HTMLLinkElement).href = arg;
        });
        _am.ipcRenderer.send('get-clients');
        _am.ipcRenderer.on('set-clients', (event, arg) => {
            this.setClients(arg);
        });
        _am.ipcRenderer.send('get-subjects');
        _am.ipcRenderer.on('set-subjects', (event, arg) => {
            this.setSubjects(arg);
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                window.close();
            }
        });
        document.getElementById('addMemoryButton').addEventListener('click', () => {
            this.addMemory();
        });
        document.getElementById('addSubject').addEventListener('click', () => {
            this.addSubject();
        });
        document.getElementById('addClient').addEventListener('click', () => {
            this.addClient();
        });
        document.getElementById('typeSelect').addEventListener("change", () => {
            this.typeChanged();
        });
    }

    addMemory(): void {
        let name: string = (document.getElementById('nameInput') as HTMLInputElement).value;
        if (name === '') {
            window.alert('Enter name');
            return;
        }
        let project: string = (document.getElementById('projectSelect') as HTMLSelectElement).value;
        let subject: string = (document.getElementById('subjectSelect') as HTMLSelectElement).value;
        let client: string = (document.getElementById('clientSelect') as HTMLSelectElement).value;
        let type: string = (document.getElementById('typeSelect') as HTMLSelectElement).value;
        // TODO
    }

    addSubject(): void {
        // TODO
        window.alert('add subject');
    }

    addClient(): void {
        // TODO
        window.alert('add client');
    }

    setClients(arg: any): void {
        // TODO
    }

    setSubjects(arg: any): void {
        // TODO
    }

    typeChanged(): void {
        let type: string = (document.getElementById('typeSelect') as HTMLSelectElement).value;
        (document.getElementById('urlInput') as HTMLInputElement).disabled = type === 'Internal';
    }
}

new AddMemory();