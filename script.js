// Step Navigation
let currentStep = 1;
const totalSteps = 4;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSteps();
    initializeFormInteractions();
    initializeOptionSelection();
    initializeDraftSections();
    initializeFinalize();
});

// Step Navigation Functions
function initializeSteps() {
    // Add click handlers to step navigation
    document.querySelectorAll('.step').forEach((step, index) => {
        step.addEventListener('click', () => {
            goToStep(index + 1);
        });
    });

    // Update step display on load
    updateStepDisplay();
}

function goToStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
        currentStep = stepNumber;
        updateStepDisplay();
    }
}

function updateStepDisplay() {
    // Update step navigation
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Update step content
    document.querySelectorAll('.step-content').forEach((content, index) => {
        if (index + 1 === currentStep) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

// Form Interactions
function initializeFormInteractions() {
    // Add Addressee
    document.getElementById('add-addressee')?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Add Addressee functionality - Would open a modal in production');
    });

    // Add Reference
    document.getElementById('add-reference')?.addEventListener('click', (e) => {
        e.preventDefault();
        const referencesList = document.getElementById('references-list');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'reference-input';
        newInput.placeholder = 'Enter reference...';
        referencesList.appendChild(newInput);
    });

    // Add Section
    document.getElementById('add-section')?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Add Section functionality - Would open a modal in production');
    });

    // Drag and Drop for Structure Items
    const structureList = document.getElementById('structure-list');
    if (structureList) {
        let draggedElement = null;

        structureList.querySelectorAll('.structure-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedElement = item;
                item.style.opacity = '0.5';
            });

            item.addEventListener('dragend', (e) => {
                item.style.opacity = '1';
            });

            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                const afterElement = getDragAfterElement(structureList, e.clientY);
                if (afterElement == null) {
                    structureList.appendChild(draggedElement);
                } else {
                    structureList.insertBefore(draggedElement, afterElement);
                }
            });
        });
    }

    // Generate button (Step 1)
    document.getElementById('generate-btn-step1')?.addEventListener('click', () => {
        // Validate required fields
        const form = document.getElementById('details-form');
        if (form.checkValidity()) {
            goToStep(2);
        } else {
            form.reportValidity();
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.structure-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Option Selection (Step 2)
function initializeOptionSelection() {
    const optionTabs = document.querySelectorAll('.option-tab');
    const optionsList = document.getElementById('options-list');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    // Option tab selection
    optionTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const optionNumber = tab.dataset.option;

            // Update active tab
            optionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update option details (simulated)
            updateOptionDetails(optionNumber);
        });
    });

    // Scroll buttons
    scrollLeftBtn?.addEventListener('click', () => {
        optionsList.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRightBtn?.addEventListener('click', () => {
        optionsList.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Generate Draft button
    document.getElementById('generate-draft-btn')?.addEventListener('click', () => {
        goToStep(3);
    });
}

function updateOptionDetails(optionNumber) {
    const detailsContainer = document.getElementById('option-details');
    if (!detailsContainer) return;

    const title = detailsContainer.querySelector('h2');
    const description = detailsContainer.querySelector('.option-description');

    // Update with placeholder content for different options
    const optionData = {
        '1': {
            title: '1) Policy Option',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        '2': {
            title: '2) Policy Option',
            description: 'This is the second policy option with detailed analysis of potential reforms. It includes comprehensive stakeholder consultation requirements and estimated implementation timelines. The option focuses on gradual transformation of existing systems.'
        },
        '3': {
            title: '3) Policy Option',
            description: 'The third policy option presents an alternative approach combining short-term efficiency measures with long-term structural changes. This balanced strategy aims to minimize disruption while achieving sustainable fiscal improvements.'
        },
        '4': {
            title: '4) Policy Option',
            description: 'Option four emphasizes technological innovation and digital transformation as key drivers of reform. It includes proposals for automated systems, data integration, and enhanced monitoring capabilities to improve efficiency and reduce administrative costs.'
        },
        '5': {
            title: '5) Policy Option',
            description: 'The fifth policy option explores international best practices and adapts successful models from comparable economies. It provides a comparative analysis framework and outlines transferable elements that could be implemented domestically.'
        }
    };

    const data = optionData[optionNumber] || optionData['1'];
    if (title) title.textContent = data.title;
    if (description) description.textContent = data.description;
}

// Draft Sections (Step 3)
function initializeDraftSections() {
    const sections = document.querySelectorAll('.draft-section');

    sections.forEach(section => {
        const collapseBtn = section.querySelector('.btn-collapse');
        const refineBtn = section.querySelector('.btn-refine');

        // Collapse/Expand functionality
        collapseBtn?.addEventListener('click', () => {
            const content = section.querySelector('.section-content');
            const isExpanded = !content.classList.contains('hidden');

            if (isExpanded) {
                content.classList.add('hidden');
                section.classList.remove('expanded');
                collapseBtn.textContent = '▼';
            } else {
                content.classList.remove('hidden');
                section.classList.add('expanded');
                collapseBtn.textContent = '▲';
            }
        });

        // AI Refine button
        refineBtn?.addEventListener('click', () => {
            alert('AI Refine functionality - Would trigger AI refinement in production');
        });
    });

    // Finalize button (Step 3)
    document.getElementById('finalize-btn-step3')?.addEventListener('click', () => {
        goToStep(4);
    });
}

// Finalize (Step 4)
function initializeFinalize() {
    // Save button
    document.getElementById('save-btn')?.addEventListener('click', () => {
        alert('Save functionality - Would save the memo in production');
    });

    // Export button
    document.getElementById('export-btn')?.addEventListener('click', () => {
        // Simulate export options
        const format = prompt('Export as:\n1. PDF\n2. DOCX\n\nEnter 1 or 2:');
        if (format === '1' || format === '2') {
            const formatName = format === '1' ? 'PDF' : 'DOCX';
            alert(`Exporting as ${formatName}...\n\nIn production, this would download the file.`);
        }
    });
}

// Prevent form submission on Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});
