const orgData = {
    role: "👑 代表取締役/CMO",
    name: "あなた (人間)",
    details: "全体の意思決定、ビジョンの策定、各部門の最終承認を行います。組織のコンパス。",
    children: [
        {
            role: "🧠 共通記憶 (KB)",
            name: "Vector DB / Notion",
            details: "組織の全知能が蓄積されるコア。過去の施策結果、各AIの学習データ、成功パターンを共有し、組織全体のPDCAを高速化させます。",
            type: "knowledge"
        },
        {
            role: "PM (取締役)",
            name: "Antigravity / Codex",
            details: "タスクの優先順位付け、進行管理、自動化システムの構築を担当。組織のエンジン。",
            children: [
                {
                    role: "📱 SNS運用本部",
                    name: "専門部隊",
                    details: "認知獲得、UGC創出、顧客エンゲージメントの構築。",
                    children: [
                        {
                            role: "🐦 X運用部",
                            name: "拡散・リアルタイム",
                            details: "トレンド分析、アルゴリズム解読、テキストベースのバズ創出。",
                            children: [
                                { role: "🧠 戦略", name: "Antigravity", details: "アルゴリズム解析、投稿企画立案(Plan)。" },
                                { role: "✍️ 投稿", name: "Claude Code", details: "中の人ライティング、返信案作成(Do)。" }
                            ]
                        },
                        {
                            role: "📸 Insta/TikTok運用部",
                            name: "ビジュアル・動画",
                            details: "視覚的ブランディング、ショート動画でのリーチ拡大。",
                            children: [
                                { role: "🧠 分析", name: "Antigravity", details: "トレンド調査、KPI管理(Check)。" },
                                { role: "🤖 自動化", name: "Codex", details: "動画編集・投稿ワークフロー構築(Do)。" }
                            ]
                        },
                        {
                            role: "💬 LINE公式運用部",
                            name: "CRM・リテンション",
                            details: "既存顧客のナーチャリング、LTV向上。",
                            children: [
                                { role: "✍️ 配信", name: "Claude Code", details: "シナリオ設計、ステップメール執筆(Do)。" },
                                { role: "🤖 ボット", name: "Codex", details: "API連携、自動応答システム構築(Do)。" }
                            ]
                        }
                    ]
                },
                {
                    role: "📝 SEO/コンテンツ本部",
                    name: "専門部隊",
                    details: "オーガニック流入最大化、リード獲得、信頼構築。",
                    children: [
                        {
                            role: "📄 ブログ記事制作部",
                            name: "オウンドメディア",
                            details: "高品質コンテンツによる集客とブランディング。",
                            children: [
                                { role: "🧠 構成", name: "Antigravity", details: "キーワード選定、構成案作成(Plan)。" },
                                { role: "✍️ 執筆", name: "Claude Code", details: "専門性の高い記事執筆、リライト(Do)。" }
                            ]
                        },
                        {
                            role: "📑 WP/資料制作部",
                            name: "リード獲得",
                            details: "ホワイトペーパー、事例集等によるリード転換。",
                            children: [
                                { role: "🧠 企画", name: "Antigravity", details: "ターゲットインサイト分析(Plan)。" },
                                { role: "✍️ 制作", name: "Claude Code", details: "資料構成、本文執筆(Do)。" }
                            ]
                        },
                        {
                            role: "🤖 テクニカルSEO部",
                            name: "基盤開発",
                            details: "内部対策、構造化データ、自動分析。",
                            children: [
                                { role: "🤖 実装", name: "Codex", details: "サイトマップ自動化、内部リンク最適化(Do)。" },
                                { role: "🧠 解析", name: "Antigravity", details: "順位変動分析、改善指示(Check/Act)。" }
                            ]
                        }
                    ]
                },
                {
                    role: "🎯 広告/パフォ本部",
                    name: "専門部隊",
                    details: "CPA最適化、ROAS最大化、短期的なCV獲得。",
                    children: [
                        {
                            role: "📈 運用型広告部",
                            name: "Google/Meta",
                            details: "主要媒体の運用と予算最適化。",
                            children: [
                                { role: "🧠 運用", name: "Antigravity", details: "シミュレーション、A/Bテスト設計(Plan)。" },
                                { role: "🤖 集計", name: "Codex", details: "レポート自動化、CSV処理(Check)。" }
                            ]
                        },
                        {
                            role: "📰 インフィード広告部",
                            name: "潜在層リーチ",
                            details: "記事広告、ニュースサイト等への配信。",
                            children: [
                                { role: "✍️ コピー", name: "Claude Code", details: "DRMコピー執筆、LP案作成(Do)。" },
                                { role: "🧠 調査", name: "Antigravity", details: "競合調査、トレンド抽出(Plan)。" }
                            ]
                        }
                    ]
                },
                {
                    role: "📢 PR/広報本部",
                    name: "専門部隊",
                    details: "社会的信頼獲得、ブランド認知の爆発。メディアリレーション。",
                    children: [
                        {
                            role: "📰 プレスリリース制作部",
                            name: "ニュース創出",
                            details: "社会性と新規性を持ったニュースの言語化。",
                            children: [
                                { role: "🧠 戦略", name: "Antigravity", details: "ニュースバリュー分析(Plan)。" },
                                { role: "✍️ 執筆", name: "Claude Code", details: "プレスリリース本稿執筆(Do)。" }
                            ]
                        },
                        {
                            role: "📺 メディア露出部",
                            name: "リレーション",
                            details: "TV・雑誌メディアへのアプローチ支援。",
                            children: [
                                { role: "🧠 分析", name: "Antigravity", details: "メディアリスト作成、文脈分析(Plan)。" },
                                { role: "🤖 監視", name: "Codex", details: "言及監視、パブリシティ検知(Check)。" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            role: "🛠️ スペシャリスト本部",
            name: "デザイン & 開発",
            details: "各部門を横断してクリエイティブと技術を提供。組織のツールキット。",
            children: [
                { role: "🎨 デザイナー", name: "Antigravity", details: "バナー生成、Webデザイン。一律のビジュアルID管理(Do)。" },
                { role: "💻 プログラマー", name: "Codex", details: "API統合、独自ツール開発。組織の自動化基盤構築(Do)。" }
            ]
        }
    ]
};

function renderNode(node, type = "") {
    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    if (type) nodeEl.setAttribute('data-type', type);

    const cardEl = document.createElement('div');
    cardEl.className = 'card glass';
    cardEl.innerHTML = `
        <div class="role">${node.role}</div>
        <div class="name">${node.name}</div>
    `;
    
    cardEl.addEventListener('click', () => showDetails(node));
    nodeEl.appendChild(cardEl);

    if (node.children && node.children.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children';
        
        // Determine the type of the CURRENT node
        let currentType = type;
        if (node.type) currentType = node.type;
        else if (node.role.includes("本部")) currentType = "department";
        else if (node.role.includes("スペシャリスト")) currentType = "specialist";

        // Add vertical layout class for roles under departments/specialists
        if (currentType === 'department' || currentType === 'specialist') {
            childrenContainer.classList.add('vertical');
        } else {
            // Setting custom property for horizontal layout to calculate line width
            childrenContainer.style.setProperty('--child-count', node.children.length);
        }

        node.children.forEach(child => {
            // Pass the current type down to children unless they override it
            let childType = child.type || currentType;
            const childNode = renderNode(child, childType);
            childrenContainer.appendChild(childNode);
        });

        // Add class if only one child for specific styling
        if (node.children.length === 1 && !childrenContainer.classList.contains('vertical')) {
            childrenContainer.classList.add('single-child');
        }

        nodeEl.appendChild(childrenContainer);
    }

    return nodeEl;
}

function showDetails(node) {
    const detailsPanel = document.getElementById('role-details');
    const detailsBody = document.getElementById('details-body');
    
    detailsBody.innerHTML = `
        <h2 style="font-family: var(--font-heading); margin-bottom: 1rem; color: var(--accent-secondary);">${node.role}</h2>
        <h3 style="margin-bottom: 2rem; opacity: 0.8;">担当: ${node.name}</h3>
        <p style="line-height: 1.6; font-size: 1.1rem;">${node.details}</p>
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--glass-border);">
            <p style="color: var(--text-muted); font-size: 0.9rem;">※ 詳細は内部ドキュメントを参照</p>
        </div>
    `;
    
    detailsPanel.classList.remove('hidden');
}

document.getElementById('close-details').addEventListener('click', () => {
    document.getElementById('role-details').classList.add('hidden');
});

// Initial Render
const container = document.getElementById('org-chart-container');
container.appendChild(renderNode(orgData));


// Center the scroll view on load
window.addEventListener('load', () => {
    // We use a slight delay to ensure CSS calculations and flex widths are entirely painted
    setTimeout(() => {
        const appContainer = document.querySelector('.app-container');
        const orgChartContainer = document.getElementById('org-chart-container');
        
        if (appContainer && orgChartContainer) {
            // Find the center of the chart
            const chartWidth = orgChartContainer.scrollWidth;
            const containerWidth = appContainer.clientWidth;
            
            if (chartWidth > containerWidth) {
                // Scroll to center
                const targetScrollLeft = (chartWidth - containerWidth) / 2;
                // Use smooth scrolling for a nice initial entering effect
                appContainer.scrollTo({
                    left: targetScrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, 100);
});
