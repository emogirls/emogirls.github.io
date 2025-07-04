function showTooltip(element, topDistance = '-10px') {
    var existingTooltip = document.getElementById('dynamic-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }

    var tooltipText = element.getAttribute('data-tooltip');
    var isOfficial = element.getAttribute('data-official') === 'true';
    var tooltipDiv = document.createElement('div');
    tooltipDiv.setAttribute('id', 'dynamic-tooltip');
    tooltipDiv.style.position = 'absolute';
    tooltipDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    tooltipDiv.style.color = '#ffffff';
    tooltipDiv.style.padding = '5px 10px';
    tooltipDiv.style.borderRadius = '5px';
    tooltipDiv.style.backdropFilter = 'blur(10px)';
    tooltipDiv.style.webkitBackdropFilter = 'blur(10px)';
    tooltipDiv.style.zIndex = '10';
    tooltipDiv.style.whiteSpace = 'nowrap';
    if (!(window.getComputedStyle(document.body).fontFamily.includes('Arial') || window.getComputedStyle(document.body).fontFamily.includes('Times New Roman') || window.getComputedStyle(document.body).fontFamily.includes('Courier New'))) {
        tooltipDiv.style.fontSize = '15px';
    } else {
        tooltipDiv.style.fontSize = '12px';
    }
    tooltipDiv.innerHTML = isOfficial ? "<i class='bx bxs-badge-check' style='color:#ffffff'></i> " + tooltipText : tooltipText;

    tooltipDiv.style.opacity = '0';
    document.body.appendChild(tooltipDiv);

    var badgeRect = element.getBoundingClientRect();
    var tooltipRect = tooltipDiv.getBoundingClientRect();

    var topPosition = badgeRect.top + window.scrollY + parseInt(topDistance) - tooltipRect.height;
    var leftPosition = badgeRect.left + window.scrollX + (badgeRect.width / 2) - (tooltipRect.width / 2);

    tooltipDiv.style.top = `${topPosition}px`;
    tooltipDiv.style.left = `${leftPosition}px`;

    tooltipDiv.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
    tooltipDiv.style.transformOrigin = 'top';

    setTimeout(() => {
        tooltipDiv.style.opacity = '1';
    }, 10);
}

function hideTooltip() {
    var tooltipDiv = document.getElementById('dynamic-tooltip');
    if (tooltipDiv) {
        tooltipDiv.style.opacity = '0';
        setTimeout(() => {
            tooltipDiv.remove();
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var tooltipTargets = document.querySelectorAll('.user-badges-container, .display-name, .social-copy-icon, .status-icon-div, .activity-image, .discord-server-widget');
    tooltipTargets.forEach(function(target) {
        target.addEventListener('mouseover', function() {
            showTooltip(this);
        });
        target.addEventListener('mouseout', function() {
            hideTooltip();
        });
    });
});