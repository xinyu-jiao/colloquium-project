// Community of Practice Network Graph
class CommunityNetwork {
  constructor() {
    this.container = document.getElementById('network-container');
    this.modal = document.getElementById('node-modal');
    this.modalTitle = document.getElementById('modal-title');
    this.modalBody = document.getElementById('modal-body');
    this.modalClose = document.querySelector('.modal-close');
    
    this.nodes = this.initializeNodes();
    this.connections = [];
    
    this.init();
  }
  
  initializeNodes() {
    return [
      {
        id: 'center',
        title: 'Community of Practice',
        type: 'center',
        x: 50, // percentage
        y: 50,
        content: `Community of practice network for sound-first AI interfaces.`
      },
      // Inner circle nodes (closer to center)
      {
        id: 'platform-tools',
        title: 'Platform Tools',
        type: 'category',
        // x: 50,
        // y: 35,
        x: 35,
        y: 40,
        content: `Platform tools that provide AI-powered assistance for blind users.`
      },
      {
        id: 'practitioner-advocates',
        title: 'Practitioner-Advocates',
        type: 'category',
        x: 65,
        y: 40,
        content: `Practitioners and advocates working directly with blind communities.`
      },
      {
        id: 'academic-research',
        title: 'Academic Research',
        type: 'category',
        x: 65,
        y: 60,
        content: `Academic research projects exploring sound-based accessibility.`
      },
      {
        id: 'artist-practice',
        title: 'Artist/Speculative Practice',
        type: 'category',
        // x: 50,
        // y: 65,
        x: 35,
        y: 60,
        content: `Artists and designers exploring sound as an interface medium.`
      },
      {
        id: 'design-stance',
        title: 'Design Stance Distilled',
        type: 'child',
        // x: 35,
        // y: 60,
        x: 50,
        y: 70,
        content: `
          <div>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Co-production over consumption</li>
              <li>Sound as primary structure, validated <em>in situ</em></li>
              <li>Power-aware defaults that make adaptation audible</li>
              <li>Keep traces local and ephemeral</li>
              <li>Give users practical refusal and revision—not just permissions buried in policy</li>
            </ul>
          </div>
        `
      },
      {
        id: 'my-positioning',
        title: 'My Project\'s Positioning',
        type: 'child',
        // x: 35,
        // y: 40,
        x: 50,
        y: 30,
        content: `
          <div style="margin-bottom: 20px;">
            <strong>Synthesis and Contribution</strong>
            <ul style="margin-left: 20px; margin-top: 10px;">
              <li>Combines academic rigor with corporate critique and artistic inspiration.</li>
              <li>Offers a reinterpretation of assistive technology—from functional tools to experiential, emotionally supportive companions.</li>
              <li>Explicitly challenges the visual-dominant, screen-reader paradigm.</li>
            </ul>
          </div>
          <div>
            <strong>Audience vs. Community</strong>
            <ul style="margin-left: 20px; margin-top: 10px;">
              <li><em><strong>Primary Audience</strong></em>: Blind and low-vision users. The design must prioritize their lived experience, participatory feedback, and emotional connection.</li>
              <li><em><strong>Community of Practice</strong></em>: Includes:
                <ul style="margin-left: 20px; margin-top: 8px;">
                  <li>Corporate teams (Microsoft, Be My Eyes and etc.).</li>
                  <li>HCI and accessibility researchers.</li>
                  <li>Sound artists and speculative designers.</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      // Outer circle nodes (positioned around their parent nodes with 60° angles)
      {
        id: 'microsoft-seeing-ai',
        title: 'Microsoft Seeing AI',
        type: 'grandchild',
        parent: 'platform-tools',
        x: 22,
        y: 48,
        content: `
          <div>
            <div class="video-container">
              <iframe 
                src="https://www.youtube.com/embed/bqeQByqf_f8" 
                title="Microsoft Seeing AI Demo" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>
            <p>Its strength is availability: point-and-describe lowers friction for reading and scene cues. But precisely because it works well in episodic tasks, it entrenches a "caption as truth" habit where recognition is centralized, thresholds are opaque, and the user is funneled into waiting for a single authoritative answer. This narrows the interactional space to request/response and obscures model uncertainty and failure modes. My system treats its outputs as provisional signals—rendered as graded, spatialized sonics—so users can modulate granularity, hear confidence, and decide when to pivot rather than accept one-shot captions as the default.</p>
          </div>
        `
      },
      {
        id: 'be-my-eyes',
        title: 'Be My Eyes / Be My AI',
        type: 'grandchild',
        parent: 'platform-tools',
        x: 22,
        y: 30,
        content: `
          <div>
            <p>Human-in-the-loop plus strong visual Q&A removes barriers for many micro-tasks, yet the exchange remains transactional and answer-maximizing: get the description, move on. That logic pushes cognitive risk onto the user when the model is wrong and, over time, deepens dependence on black-box mediation. I recast the help layer as <em>ambient and revisable</em>—short, low-burden sonic cues that can be re-queried, with user-controlled escalation to human support. In this framing, "assistance" is a spectrum of situated checks rather than a single, definitive description.</p>
          </div>
        `
      },
      {
        id: 'nypl-dimensions',
        title: 'NYPL "Dimensions"',
        type: 'grandchild',
        parent: 'practitioner-advocates',
        x: 78,
        y: 30,
        content: `
          <div>
            <img src="./static/img/img_dimensions.jpg" alt="NYPL Dimensions project" style="max-width:100%; height:auto; margin: 10px 0;"><br>
            <p>Dimensions proves that when blind practitioners author tactile media, authorship and literacy shift to the community. The risk is that the model can still rely on fixed spaces, specialized tools, and a tactile-first skill ladder that newcomers may not have—leaving portability and broader participation unresolved. I adopt the governance lesson (co-ownership and public pedagogy) but translate it into low-barrier "sound-making studios," where presets and mappings are co-authored, portable, and protected from enclosure.</p>
          </div>
        `
      },
      {
        id: 'chris-downey',
        title: 'Chris Downey',
        type: 'grandchild',
        parent: 'practitioner-advocates',
        x: 78,
        y: 48,
        content: `
          <div>
            <p>Downey's practice shows that sound and touch are not afterthoughts but primary structures for spatial cognition. The danger is the heroic universalization of those insights across wildly different acoustics; what orients in a calm lobby may overwhelm in a reverberant station. I keep the spatial ethos—sound as place-making, not beeps—but require situated validation across diverse soundscapes before promoting any cue to a default.</p>
          </div>
        `
      },
      {
        id: 'penn-state',
        title: 'Penn State A11y Lab',
        type: 'grandchild',
        parent: 'academic-research',
        x: 77,
        y: 72,
        content: `
          <div>
            <strong>Natural-sound sonification</strong><br>
            <img src="./static/img/img_psu.png" alt="Penn State A11y Lab research" style="max-width:100%; height:auto; margin: 10px 0;"><br>
            <p>Susurrus maps each bar in a chart to a distinct natural sound (e.g., different birds) and sets its loudness with LUFS so that perceived volume is proportional to bar height; the mapped sounds are played <strong>in parallel</strong> on a loop over a mild ambient background with random intervals. Users can then select one or more bars via number keys to isolate those sounds and request text-to-speech descriptions—an interaction model aligned with AISA actions (gist, navigate, select, details-on-demand).</p>
            <p>The parallel "audio graph" helps users separate categories, but the design leans on loudness while the ambient bed and random intervals can complicate comparison at scale; the authors' own studies show loudness works best, interval mapping confuses, duration mapping slows ordering, and parallel streams should be capped to ~five to avoid overload—constraints that the figure's looping, backgrounded mix doesn't reveal. In applying this technique, I'd keep the parallel LUFS mapping but add rules that limit concurrent voices, suppress or duck the ambience, and privilege stable timing when users are comparing bars—so the interface remains legible beyond small N.</p>
          </div>
        `
      },
      {
        id: 'yuri-suzuki',
        title: 'Yuri Suzuki',
        type: 'grandchild',
        parent: 'artist-practice',
        x: 23,
        y: 72,
        content: `
          <div>
            <strong><em>Ambient Machine</em></strong><br>
            <img src="./static/img/img_yuri.png" alt="Yuri Suzuki Ambient Machine" style="max-width:100%; height:auto; margin: 10px 0;"><br>
            <p>Yuri Suzuki's <em>Ambient Machine</em> proves that a tactile, layer-based approach to everyday sound can be inviting and legible: with banks of switches shaping volume, reverb, and tempo, it lets people compose ambience without screens. Yet the very elegance of this parameterized grid narrows what sound can communicate in an interactive system. It centers preset materials and a fixed control surface, making the user a one-way "composer" rather than a dialogue partner; it cannot express system intent or uncertainty, risks masking critical environmental cues outside quiet interiors, and places a memory burden on users to recall switch mappings—issues compounded by the lack of remapping, context awareness, and long-term fatigue management.</p>
            <p>For a sound-first accessibility interface, I'd borrow the tactile immediacy and tunable layers but reframe them as a conversational medium. That means adding audible channels for confidence/intent, building anti-masking rules and context-aware sparsity, designing fatigue-sensitive timing, and enabling user-remappable controls paired with clear auditory confirmations. The sound library should be community-coauthored and governed (not just curated presets), while adaptation remains local and short-lived by default, portable on the user's terms. Finally, spatial cues and any haptics should be validated across diverse real-world acoustics and kept optional—ensuring ambience becomes an accountable interaction language rather than a decorative soundtrack.</p>
          </div>
        `
      }
    ];
  }
  
  init() {
    this.createNodes();
    this.createConnections();
    this.bindEvents();
  }
  
  createNodes() {
    this.nodes.forEach(node => {
      const nodeElement = document.createElement('div');
      nodeElement.className = `network-node ${node.type}`;
      nodeElement.textContent = node.title;
      nodeElement.dataset.nodeId = node.id;
      
      // Position nodes (circular positioning)
      let nodeSize;
      switch(node.type) {
        case 'center': nodeSize = 100; break;
        case 'category': nodeSize = 85; break;
        case 'child': nodeSize = 85; break;
        case 'grandchild': nodeSize = 70; break;
        default: nodeSize = 85;
      }
      
      nodeElement.style.left = `calc(${node.x}% - ${nodeSize/2}px)`;
      nodeElement.style.top = `calc(${node.y}% - ${nodeSize/2}px)`;
      
      this.container.appendChild(nodeElement);
    });
  }
  
  createConnections() {
    const centerNode = this.nodes.find(n => n.type === 'center');
    const categoryNodes = this.nodes.filter(n => n.type === 'category');
    const childNodes = this.nodes.filter(n => n.type === 'child');
    const grandchildNodes = this.nodes.filter(n => n.type === 'grandchild');
    
    // Connect center to all inner circle nodes (categories and children)
    categoryNodes.forEach(categoryNode => {
      this.createConnection(centerNode, categoryNode);
    });
    
    childNodes.forEach(childNode => {
      this.createConnection(centerNode, childNode);
    });
    
    // Connect categories to their grandchildren
    grandchildNodes.forEach(grandchildNode => {
      const parentCategory = this.nodes.find(n => n.id === grandchildNode.parent);
      if (parentCategory) {
        this.createConnection(parentCategory, grandchildNode);
      }
    });
  }
  
  createConnection(node1, node2) {
    const connection = document.createElement('div');
    connection.className = 'network-connection';
    
    // Different styles for different connection types
    if (node1.type === 'center') {
      connection.style.background = 'linear-gradient(90deg, #8dd1da, #555)';
      connection.style.height = '2px';
    } else if (node1.type === 'category') {
      connection.style.background = 'linear-gradient(90deg, #666, #444)';
      connection.style.height = '1px';
      connection.style.opacity = '0.8';
    }
    
    const containerRect = this.container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // Get node sizes (radius) for center calculation
    const getNodeRadius = (node) => {
      switch(node.type) {
        case 'center': return 50; // 100px / 2
        case 'category': return 42.5; // 85px / 2
        case 'child': return 42.5; // 85px / 2
        case 'grandchild': return 35; // 70px / 2
        default: return 42.5;
      }
    };
    
    // Calculate center positions of nodes
    const node1Radius = getNodeRadius(node1);
    const node2Radius = getNodeRadius(node2);
    
    const x1Center = (node1.x / 100) * containerWidth;
    const y1Center = (node1.y / 100) * containerHeight;
    const x2Center = (node2.x / 100) * containerWidth;
    const y2Center = (node2.y / 100) * containerHeight;
    
    // Calculate connection line from center to center
    const deltaX = x2Center - x1Center;
    const deltaY = y2Center - y1Center;
    const totalLength = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    
    // Calculate start and end points (edge of circles, not centers)
    const startX = x1Center + (node1Radius * deltaX) / totalLength;
    const startY = y1Center + (node1Radius * deltaY) / totalLength;
    const endX = x2Center - (node2Radius * deltaX) / totalLength;
    const endY = y2Center - (node2Radius * deltaY) / totalLength;
    
    // Final connection length (from edge to edge)
    const connectionLength = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    
    connection.style.left = `${startX}px`;
    connection.style.top = `${startY}px`;
    connection.style.width = `${connectionLength}px`;
    connection.style.transform = `rotate(${angle}deg)`;
    connection.style.transformOrigin = 'left center';
    connection.style.zIndex = '1';
    
    this.container.appendChild(connection);
  }
  
  bindEvents() {
    // Node click events
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('network-node')) {
        const nodeId = e.target.dataset.nodeId;
        const node = this.nodes.find(n => n.id === nodeId);
        if (node) {
          this.showModal(node);
        }
      }
    });
    
    // Modal close events
    this.modalClose.addEventListener('click', () => {
      this.hideModal();
    });
    
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.hideModal();
      }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.style.display === 'block') {
        this.hideModal();
      }
    });
    
    // Responsive updates
    window.addEventListener('resize', () => {
      this.updateLayout();
    });
  }
  
  showModal(node) {
    this.modalTitle.textContent = node.title;
    this.modalBody.innerHTML = node.content;
    this.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  hideModal() {
    this.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  updateLayout() {
    // Clear existing connections
    const connections = this.container.querySelectorAll('.network-connection');
    connections.forEach(conn => conn.remove());
    
    // Recreate connections with new dimensions
    this.createConnections();
  }
}

// Initialize the network when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new CommunityNetwork();
}); 