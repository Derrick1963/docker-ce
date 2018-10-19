}
         if (arguments.length < 2) {
            rootNode = window.document.body;
            rootNode = document.body;
            if (!rootNode) {
                throw Error("ko.applyBindings: could not find window.document.body; has the document been loaded?");
                throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
            }
        } else if (!rootNode || (rootNode.nodeType !== 1 && rootNode.nodeType !== 8)) {
            throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
